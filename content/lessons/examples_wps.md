---
title: "WPS Examples"
---

Let's see some examples of common requests for the WMS operations.

We are using a demo site so please be aware that something might be unavailable in the future.

## GetCapabilities

```shell
curl http://master.demo.geonode.org/geoserver/wms?request=GetCapabilities
```

[http://master.demo.geonode.org/geoserver/wms?request=GetCapabilities](http://master.demo.geonode.org/geoserver/wms?request=GetCapabilities)

## GetMap

```shell
curl -X GET http://master.demo.geonode.org/geoserver/wms\?\
service=WMS\&\
version=1\.1\.0\&\
request=GetMap\&\
layers=geonode\:ne_50m_admin_0_countries\&\
styles=\&\
bbox=-180\.0\,-89\.99892578125\,180\.0\,83\.5996093750001\&\
width=768\&\
height=370\&\
srs=EPSG\:4326\&\
format=image\/png
```

[http://master.demo.geonode.org/geoserver/geonode/wms?service=WMS&version=1.1.0&request=GetMap&layers=geonode:ne_50m_admin_0_countries&styles=&bbox=-180.0,-89.99892578125,180.0,83.5996093750001&width=768&height=370&srs=EPSG:4326&format=application/openlayers](http://master.demo.geonode.org/geoserver/geonode/wms?service=WMS&version=1.1.0&request=GetMap&layers=geonode:ne_50m_admin_0_countries&styles=&bbox=-180.0,-89.99892578125,180.0,83.5996093750001&width=768&height=370&srs=EPSG:4326&format=application/openlayers)

## GetFeatureInfo

```shell
curl -X GET http://master.demo.geonode.org/geoserver/wms\?\
SERVICE=WMS\&\
VERSION=1\.1\.1\&\
REQUEST=GetFeatureInfo\&\
FORMAT=image\/png\&\
TRANSPARENT=true\&\
QUERY_LAYERS=geonode\:ne_50m_admin_0_countries\&\
STYLES\&\
LAYERS=geonode\:ne_50m_admin_0_countries\&\
exceptions=application\/vnd\.ogc\.se_inimage\&\
INFO_FORMAT=text\/html\&\
FEATURE_COUNT=50\&\
X=50\&\
Y=50\&\
SRS=EPSG\:4326\&\
WIDTH=101\&\
HEIGHT=101\&\
BBOX=10\.958003997802734\,44\.921722412109375\,15\.396480560302734\,49.\360198974609375
```

[http://master.demo.geonode.org/geoserver/geonode/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=geonode:ne_50m_admin_0_countries&STYLES&LAYERS=geonode:ne_50m_admin_0_countries&exceptions=application/vnd.ogc.se_inimage&INFO_FORMAT=text/html&FEATURE_COUNT=50&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=10.958003997802734,44.921722412109375,15.396480560302734,49.360198974609375](http://master.demo.geonode.org/geoserver/geonode/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=geonode:ne_50m_admin_0_countries&STYLES&LAYERS=geonode:ne_50m_admin_0_countries&exceptions=application/vnd.ogc.se_inimage&INFO_FORMAT=text/html&FEATURE_COUNT=50&X=50&Y=50&SRS=EPSG:4326&WIDTH=101&HEIGHT=101&BBOX=10.958003997802734,44.921722412109375,15.396480560302734,49.360198974609375)