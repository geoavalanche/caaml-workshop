---
title: "WCS Examples"
---

Let's see some examples of common requests for the WCS operations.

We are using a demo site so please be aware that something might be unavailable in the future.

## GetCapabilities

```shell
curl -X GET http://master.demo.geonode.org/geoserver/wcs?request=GetCapabilities
```

[http://master.demo.geonode.org/geoserver/wcs?request=GetCapabilities](http://master.demo.geonode.org/geoserver/wcs?request=GetCapabilities)

## DescribeCoverage

```shell
curl -X GET http://master.demo.geonode.org/geoserver/wcs\?\
service=WCS\&\
version=2\.0\.1\&\
request=DescribeCoverage\&\
coverageId=geonode:tazdem
```

[http://master.demo.geonode.org/geoserver/wcs?service=WCS&version=2.0.1&request=DescribeCoverage&coverageId=geonode:tazdem](http://master.demo.geonode.org/geoserver/wcs?service=WCS&version=2.0.1&request=DescribeCoverage&coverageId=geonode:tazdem)

## GetCoverage

```shell
curl -X GET http://master.demo.geonode.org/geoserver/wcs\?\
service=WCS\&\
version=2\.0\.1\&\
request=GetCoverage\&\
compression=LZW\&\
tiling=true\&\
tileheight=256\&\
tilewidth=256\&\
coverageId=geonode:tazdem
```

[http://master.demo.geonode.org/geoserver/wcs?service=WCS&request=GetCoverage&version=2.0.1&CoverageId=geonode:tazdem&compression=LZW&tiling=true&tileheight=256&tilewidth=256](http://master.demo.geonode.org/geoserver/wcs?service=WCS&request=GetCoverage&version=2.0.1&CoverageId=geonode:tazdem&compression=LZW&tiling=true&tileheight=256&tilewidth=256)