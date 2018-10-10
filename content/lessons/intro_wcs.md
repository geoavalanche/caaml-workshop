---
title: "Introduction to WCS"
---

## What it is

WCS is a standard service interface which defines and enables interoperable access to geospatial
*grid coverages*. This term refers typically to content such as satellite images, digital aerial photos, digital elevation data, and other phenomena represented by values at each measurement point.

It allows clients to access detailed information like real grid data or choose a portion of them based on spatial constraint.

This service provides available data together with detailed descriptions, syntax and semantics to allow the data to be processed rather just displayed.

## Allowed operations

The following WCS operations are defined in the specification that allows to call:

#### GetCapabilities
HTTP call to retrieve service-level metadata

#### DescribeCoverage
HTTP call to get a full description of one or more coverages served by a particular implementation

#### GetCoverage
HTTP call to get a coverage based upon spatial constraints and encoded in a well-known coverage format
