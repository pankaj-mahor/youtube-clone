import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constant";

const ChannelCard = ({ channelDetail, marginTop }) => {
	console.log(channelDetail);
	return (
		<Box
			sx={{
				boxShadow: 0,
				borderRadius: 20,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: { xs: "350px", md: "300px" },
				height: "320px",
				margin: "auto",
				marginTop,
			}}
		>
			<Link to={`/channel/${channelDetail?.id?.channelId}`}>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						textAlign: "center",
						color: "#fff",
					}}
				>
					<CardMedia
						component="img"
						src={
							channelDetail?.snippet?.thumbnails?.default?.url ||
							demoProfilePicture
						}
						alt={channelDetail?.snippet?.title}
						sx={{
							borderRadius: "50%",
							height: "180px",
							width: "180px",
							mb: 2,
							border: "1px solid #e3e3e3",
						}}
					/>

					<Typography varient="h6">
						{channelDetail?.snippet?.title}
						<CheckCircle
							sx={{
								fontSize: 16,
								color: "grey",
								ml: "5px",
							}}
						/>
					</Typography>

					{channelDetail?.statistics?.subscriberCount && (
						<Typography>
							{parseInt(
								channelDetail?.statistics?.subscriberCount
							).toLocaleString()}{" "}
							Subscribers
						</Typography>
					)}
				</CardContent>
			</Link>
		</Box>
	);
};

export default ChannelCard;
