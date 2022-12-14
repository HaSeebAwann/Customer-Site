import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from "react"
import React, { useEffect } from 'react'
import axios from 'axios'

export default function Sidebar() {
    const [result, setResult] = useState([])
    const [categories, setcategories] = useState([])
    useEffect(() => {
        axios.get("https://apix-stage.bazaarghar.com/v1/categories/getAllCategories").then((response) => {
            setResult(response.data)
            setcategories(response.data)
        });
    }, []);
    return (
        <Box sx={{maxHeight:"380px", overflow: "hidden", backgroundColor:"white" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", borderBottom: "1px solid #E4E4E4", margin:"0 2% " }}>TOP CATEGORIES</Typography>
            <Box sx={{margin: "0 5%"}}>
                {categories.map((array, index) => (
                    <Box key={index} sx={{ display: "flex", justifyContent: "space-between", margin: "", boxSizing: "border-box", padding: "14px 0px" }}>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ width: "30px", height: "30px"}}>
                                <img alt='bazaarGhar' src={array.mainImage} width={"100%"} height={"100%"} style={{borderRadius:"50%"}} />
                            </Box>
                            <Box sx={{ alignSelf: "center", padding: "0 8px" }}>
                                <Typography sx={{fontSize:"14px" , fontWeight: "700"}}>{array.name}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: "20px", height: "20px", alignSelf: "center" }} >
                            <img alt='icon' src={process.env.PUBLIC_URL + "/logos/arrow.svg"} width={"100%"} height={"100%"} />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )


}