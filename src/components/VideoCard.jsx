import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import {
	demoChannelTitle,
	demoChannelUrl,
	demoThumbnailUrl,
	demoVideoTitle,
	demoVideoUrl,
} from "../utils/constant";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	console.log(videoId, snippet);

	return (
		<Card
			sx={{
				width: {
					md: "300px",
					xs: "100%",
				},
				boxShadow: "none",
				borderRadius: 0,
			}}
		>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia
					component="img"
					src={snippet?.thumbnails?.high?.url}
					alt={snippet?.title}
					sx={{
						width: 358,
						height: 180,
					}}
				/>
			</Link>
			<CardContent
				sx={{
					backgroundColor: "#1e1e1e",
					height: "106px",
				}}
			>
				<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
					<Typography fontWeight="bold" varient="subtitle1" color="#fff">
						{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
					</Typography>
				</Link>

				<Link
					to={
						snippet?.channelId
							? `/channel/${snippet?.channelId}`
							: demoChannelUrl
					}
				>
					<Typography fontWeight="bold" varient="subtitle2" color="gray">
						{snippet?.channelTitle || demoChannelTitle}
						<CheckCircle
							sx={{
								fontSize: 15,
								color: "grey",
								ml: "5px",
							}}
						/>
					</Typography>
				</Link>
			</CardContent>
		</Card>
	);
};

export default VideoCard;
