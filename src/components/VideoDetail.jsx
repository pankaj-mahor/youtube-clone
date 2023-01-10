import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import Videos from "./Videos";

const VideoDetail = () => {
	const [videoDetail, setVideoDetail] = useState(null);
	const [suggestedVideos, setSuggestedVideos] = useState([]);
	const { videoId } = useParams();

	useEffect(() => {
		fetchFromApi(`videos?part=snippet,statistics&id=${videoId}`).then((data) =>
			setVideoDetail(data.items[0])
		);

		//suggested video
		fetchFromApi(
			`search?part=snippet&relatedToVideoId=${videoId}&type=video`
		).then((data) => setSuggestedVideos(data.items));
	}, [videoId]);

	if (!videoDetail?.snippet) return "Loading...";

	const {
		snippet: { title, channelId, channelTitle },
		statistics: { viewCount, likeCount },
	} = videoDetail;

	return (
		<Box minHeight="95vh">
			<Stack direction={{ xs: "column", md: "row" }}>
				<Box flex={1}>
					<Box
						sx={{
							width: "100%",
							position: "sticky",
							top: "86px",
						}}
					>
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${videoId}`}
							className="react-player"
							controls
						/>
						<Typography color="#fff" varient="h5" fontWeight="bold" p={2}>
							{title}
						</Typography>
						<Stack
							direction="row"
							justifyContent="space-between"
							sx={{
								color: "#fff",
							}}
							py={1}
							px={2}
						>
							<Link to={`/channel/${channelId}`}>
								<Typography
									variant={{ sm: "subtitle1", md: "h6" }}
									color="#FFF"
								>
									{channelTitle}
									<CheckCircle
										sx={{
											fontSize: "12px",
											color: "gray",
											ml: "5px",
										}}
									/>
								</Typography>
							</Link>

							<Stack direction="row" gap="20px" alignItems="center">
								<Typography varient="body1" sx={{ opacity: 0.7 }}>
									{parseInt(viewCount).toLocaleString()} views
								</Typography>
								<Typography varient="body1" sx={{ opacity: 0.7 }}>
									{parseInt(likeCount).toLocaleString()} likes
								</Typography>
							</Stack>
						</Stack>
					</Box>
				</Box>
				<Box
					px={2}
					py={{ md: 1, xs: 5 }}
					justifyContent="center"
					alignItems="center"
				>
					<Videos videos={suggestedVideos} direction="column" />
				</Box>
			</Stack>
		</Box>
	);
};

export default VideoDetail;
