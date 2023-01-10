import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
const ChannelDetail = () => {
	const [channelDetail, setchannelDetail] = useState(null);
	const [videosRecommend, setvideosRecommend] = useState([]);
	const { id } = useParams();

	console.log(channelDetail);
	useEffect(() => {
		//get channel
		fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
			setchannelDetail(data?.items[0])
		);

		fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => setvideosRecommend(data?.items)
		);
	}, [id]);

	return (
		<Box minHeight="95vh">
			<Box>
				<div
					style={{
						background:
							"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(217,0,255,1) 100%)",
						zIndex: 10,
						height: "300px",
					}}
				></div>
				<ChannelCard channelDetail={channelDetail} marginTop="-93px" />
			</Box>

			<Box display="flex" p="2">
				<Box
					sx={{
						mr: { sm: "100px" },
					}}
				/>
				<Videos videos={videosRecommend} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
