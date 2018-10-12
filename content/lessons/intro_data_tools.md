---
title: "Data and geospatial tools"
---

## Data

Courtesy of [Aineva](http://www.aineva.it/bollettini/) we are going to work with their dataset `mnz_italy.zip` about the Italian regions where usually the avalanche bulletin is produced.

The original format of the data is *Shapefile* which is a commonly used set of files to build and share spatial data. This format despite largely used has well-known limitations and it cannot be considered for implementing interoperability.

The dataset is available for the tutorial purpose from the repository given in the initial page. We'll see how it looks like when opened in a spatial tool like **QGIS**.

## Tools

### QGIS

![qgis](https://www.osgeo.org/wp-content/uploads/QGIS_740x412_acf_cropped-370x206.png)

It's probably one the most amazing and common open-source desktop tool for working with spatial data. We are going to use it for loading lazily the shapefile into a spatial database like **PostGIS**.

#### References

- [site](https://www.qgis.org)
- [osgeo](https://www.osgeo.org/projects/qgis/)
- [install](https://www.qgis.org/en/site/forusers/download.html)

### PostGIS

![postgis](https://www.osgeo.org/wp-content/uploads/postgis-logo-1.png)

PostgIS is a spatial database extension for the the PostgreSQL DBMS. It provides new types to PostgreSQL geometry, geography, raster, and topogeometry and SQL/MM  OGC SFSQL compliant functions for doing GIS work such as cadastral management, back-end for Web mapping services.

If you are heavily working with spatial databases then **PostGIS** is your magic tool. It the best open source spatial database out here and most of the time wins the challenge with commercial ones.

We are going to use it as a datastore for our CAAML features with a dedicated schema for them. There are plenty of methods to download and install it but for our purposes we'll rely on a **Docker** container within a **Kubernetes** cluster. More on this later.

##### References

- [site](https://postgis.net/)
- [osgeo](https://www.osgeo.org/projects/qgis/)
- [install](http://postgis.net/install/)

### GeoServer

![geoserver](https://www.osgeo.org/wp-content/uploads/GeoServer-370x206.png)

Designed for interoperability, GeoServer publishes data from any major spatial data source using open standards.

It is a reference implementation and certified compliance of the following OGC standard specifications:
- **WMS**
- **WFS**
- **WCS**

GeoServer has an ecosystem of pluggable extensions which can improve the functionalities and the interoperability. Among them in particular a couple are of interest for our goal:

- [GML Application Schema](http://docs.geoserver.org/stable/en/user/data/app-schema/index.html)
- [INSPIRE](http://docs.geoserver.org/stable/en/user/extensions/inspire/index.html)

##### References

- [site](http://geoserver.org)
- [osgeo](https://www.osgeo.org/projects/geoserver/)
- [install](http://geoserver.org/download/)

### GeoNode

![geonode](https://www.osgeo.org/wp-content/uploads/GeoNode-370x206.png)

GeoNode is a content management system for developing geospatial information systems (GIS) and for building spatial data infrastructures (SDI).

It is designed to be extended and modified, and can be integrated into existing platforms. GeoNode has already embedded **GeoServer** and **PostGIS** for achieving the end goal of interoperability.

It adds to the scene **[pycsw](http://pycsw.org/)** which is an OGC standard reference implementation for publishing metadata catalogs of spatial data.

##### References

- [site](http://geonode.org)
- [osgeo](https://www.osgeo.org/projects/geonode/)
- [install](https://github.com/GeoNode/geonode#install)