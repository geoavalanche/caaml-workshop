---
title: "Introduction to WMS"
---

## What it is

WMS is a standard service interface which presents location information in an image format that can then be displayed in a map viewer, typically overlaid against a base map layer.

A user application can readily request a map to be delivered based on the location of interest. These web client applications are able to request the maps from a WMS server via simple and familiar URLs. A map returned through a WMS is a visual portrayal of the data rather than the actual mapping data.

WMS also operates in a truly distributed manner allowing individual maps to be located and requested from different servers. WMS thus enables the creation of a network of distributed map servers from which clients can build customized maps.

The OGC WMS standard is one of the standards referred to in the INSPIRE Technical Guidance to deliver an INSPIRE View Service. It has also been adopted as an ISO standard, ISO 19128.

## Allowed operations

Three WMS operations are defined in the specification that allows to access to:

#### GetCapabilities
HTTP call to retrieve service-level metadata

#### GetMap
HTTP call to get a map with the requested geographic parameters

#### GetFeatureInfo
HTTP call to get information about specific features based on their location in the map
