import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import Videos from "./Videos";

const SearchFeed = () => {
	const { searchTerm } = useParams();
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
			setVideos(data.items);
		});
	}, [searchTerm]);

	return (
		<Box
			p={2}
			sx={{
				overflowY: "auto",
				height: "90vh",
				flex: 2,
			}}
		>
			<Typography varient="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
				Search Result for :{" "}
				<span style={{ color: "#fc1503" }}>{searchTerm}</span>
			</Typography>

			<Videos videos={videos} />
		</Box>
	);
};

export default SearchFeed;
