// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Updated by Lynn Lukose
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function calculateVolumeOfSphere() {
  // input
  const radius = parseFloat(document.getElementById("radius").value)
  // process
  const volumeOfSphere = (4 / 3) * Math.PI * radius ** 3
  //output
  document.getElementById("volume").innerHTML =
    "Volume is: " + volumeOfSphere.toFixed(2) + "mm³"
}
