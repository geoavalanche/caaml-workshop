---
title: "Introduction to WFS"
---

## What it is

WFS is a standard service interface which provides access to geographic information at the level of features and feature properties using web services.

It allows clients to retrieve or modify the data they are seeking, rather than retrieving a large file that not only contains the data but potentially a lot more such as additional data that it is not necessarily required.

This service behaves to providing transactions on and access to geographic features in a manner independent of the underlying data store.

The OGC WFS standard meets largely the requirements from the INSPIRE Download Services specification.

## Allowed operations

The following WFS operations are defined in the specification that allows to call:

#### GetCapabilities
HTTP call to discover service-level metadata and capabilities

#### DescribeFeatureType
HTTP call to retrieve the application schema that defines the feature types that the service offers

#### GetFeature
HTTP call to retrieve features or values of feature properties from the underlying datastore based upon constraints on those properties

#### Transaction
HTTP call to create, change, replace and delete features and their properties

#### LockingFeature
HTTP call to prevent other users making modifications at the same time

#### {List/Describe/Create/Drop}StoredQuery
HTTP call to list, describe, create and drop parameterized query expressions that are stored by the server and can be repeatedly invoked using different parameter values.