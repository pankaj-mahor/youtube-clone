import React from "react";
import { Box, Stack } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
	if (!videos?.length) return "Loading...";
	return (
		<Stack
			direction={direction || "row"}
			flexWrap="wrap"
			justifyContent="flex-start"
			gap={2}
		>
			{videos?.map((video, index) => {
				return (
					<Box key={index}>
						{video.id.videoId && <VideoCard video={video} />}
						{video.id.channelId && <ChannelCard channelDetail={video} />}
					</Box>
				);
			})}
		</Stack>
	);
};

export default Videos;
