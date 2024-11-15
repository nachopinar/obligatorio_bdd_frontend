
import React, { useState, useEffect } from "react";

const response = await fetch("http://127.0.0.1:5000/instructor", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});

const data = await response.json();
console.log(data);