import React from "react"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"

import styled from "styled-components"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import { FormControl } from "@mui/material"

const Container = styled.div``
const Title = styled.h1`
  padding: 20px;
  font-size: 60px;
`
const FilterContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterText = styled.div`
  font-size: 24px;
  font-weight: 600;
`

const ProductList = () => {
  const [color, setColor] = React.useState("")

  const handleChangeColor = (event) => {
    setColor(event.target.value)
  }
  const [size, setSize] = React.useState("")

  const handleChangeSize = (event) => {
    setSize(event.target.value)
  }

  const [sort, setSort] = React.useState("")

  const handleChangeSort = (event) => {
    setSort(event.target.value)
    console.log(sort)
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-helper-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={color}
              label="Color"
              onChange={handleChangeColor}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"red"}>Red</MenuItem>
              <MenuItem value={"blue"}>Blue</MenuItem>
              <MenuItem value={"yellow"}>Yellow</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 75 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Size
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              onChange={handleChangeSize}
              value={size}
              autoWidth
              label=" Size"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"S"}>S</MenuItem>
              <MenuItem value={"M"}>M</MenuItem>
              <MenuItem value={"Xl"}>XL</MenuItem>
              <MenuItem value={"XLLL"}>XLLL</MenuItem>
            </Select>
          </FormControl>
        </Filter>
        <Filter>
          <FilterText>Filter Sorts:</FilterText>{" "}
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="demo-simple-select-autowidth-label">
              sort
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              onChange={handleChangeSort}
              value={sort}
              label=" Sort"
            >
              <MenuItem selected value={"newest"}>
                Neweset
              </MenuItem>
              <MenuItem value={"asc"}>Ascending</MenuItem>
              <MenuItem value={"desc"}>Descending</MenuItem>
            </Select>
          </FormControl>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
