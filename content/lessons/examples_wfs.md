---
title: "WFS Examples"
---

Let's see some examples of common requests for the WFS operations.

We are using a demo site so please be aware that something might be unavailable in the future.

## GetCapabilities

```shell
curl -X GET http://master.demo.geonode.org/geoserver/wfs?request=GetCapabilities
```

[http://master.demo.geonode.org/geoserver/wfs?request=GetCapabilities](http://master.demo.geonode.org/geoserver/wfs?request=GetCapabilities)

## DescribeFeatureType

```shell
curl -X GET http://master.demo.geonode.org/geoserver/wfs\?\
service=WFS\&\
version=1\.0\.0\&\
request=DescribeFeatureType\&\
typeName=geonode\:ne_50m_admin_0_countries
```

[http://master.demo.geonode.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=DescribeFeatureType&typeName=geonode:ne_50m_admin_0_countries](http://master.demo.geonode.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=DescribeFeatureType&typeName=geonode:ne_50m_admin_0_countries)

## GetFeature

```shell
curl -X GET http://master.demo.geonode.org/geoserver/wfs\?\
service=WFS\&\
version=1\.0\.0\&\
request=GetFeature\&\
typeName=geonode\:ne_50m_admin_0_countries\&\
maxFeatures=50
```

[http://master.demo.geonode.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode:ne_50m_admin_0_countries&maxFeatures=50](http://master.demo.geonode.org/geoserver/geonode/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode:ne_50m_admin_0_countries&maxFeatures=50)

