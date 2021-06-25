import {render} from "@testing-library/react"
import React from "react"
import App5 from "./App5"

test("renders an h1",()=>{
    const {getByText} = render(<App5/>);
    const h1 = getByText(/Hello React testing library/);
    expect(h1).toHaveTextContent("Hello React testing library")
})