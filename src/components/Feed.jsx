import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState("New");
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
			setVideos(data.items);
		});
	}, [selectedCategory]);

	return (
		<Stack
			sx={{
				flexDirection: {
					sx: "column",
					md: "row",
				},
			}}
		>
			<Box
				sx={{
					height: {
						sx: "auto",
						md: "92vh",
					},
					borderRight: "1px solid #3d3d3d",
					px: {
						sx: 0,
						md: 2,
					},
				}}
			>
				<Sidebar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				<Typography
					variant="body2"
					className="copyright"
					sx={{
						mt: 1.5,
						color: "#fff",
					}}
				>
					CopyRight 2023
				</Typography>
			</Box>

			<Box
				p={2}
				sx={{
					overflowY: "auto",
					height: "90vh",
					flex: 2,
				}}
			>
				<Typography
					varient="h4"
					fontWeight="bold"
					mb={2}
					sx={{ color: "white" }}
				>
					{selectedCategory} <span style={{ color: "#fc1503" }}>Videos</span>
				</Typography>

				<Videos videos={videos} />
			</Box>
		</Stack>
	);
};

export default Feed;
