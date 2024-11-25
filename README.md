# Markdown syntax guide

# Getting started

Install `ggwpbbruh` using npm.

```
npm install ggwpbruh

```

## Pre-requisite:

Should be using react versions above 16.0.0 or above

## Example

```
import React from "react";
import Ggwpbruh from "ggwpbruh";

function Test() {
  const people = [
    {
      name: "John Doe",
      age: 25,
    },
    {
      name: "Jane Smith",
      age: 30,
    },
    {
      name: "Alice Johnson",
      age: 22,
    },
    {
      name: "Bob Brown",
      age: 28,
    },
    {
      name: "Charlie Davis",
      age: 35,
    },
  ];
  const item = ({ item }) => {
    return (
      <div>
        {item?.name}:{item?.age}
      </div>
    );
  };

  return (
    <Ggwpbruh
      itemHeight={50}
      occupied={145}
      ItemComponent={item}
      data={people}
      endReached={() => console.log("End reached")}
    />
  );
}

export default Test;

```

## Props

| Prop          |    Type     | Required? | Default | Description                                                                                          |
| ------------- | :---------: | :-------: | :-----: | :--------------------------------------------------------------------------------------------------- |
| itemHeight    |  `Number`   |     ✓     |    -    | The height of each child item in pixels                                                              |
| occupied      |  `Number`   |     ✓     |    -    | The remaining empty space of a viewport in pixels                                                    |
| ItemComponent | `Component` |     ✓     |    -    | The rendered of each item of the data                                                                |
| data          |   `Array`   |     ✓     |    -    | The data passed to the component                                                                     |
| endReached    | `Function`  |     ✗     |    -    | A callback function which gets called when the scrollbar(if exists) hits the bottom of the container |
