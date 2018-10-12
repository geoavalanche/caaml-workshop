---
title: "Load Data"
---

## Load the shapefile into PostGIS

The first thing to do is to add the dataset `mnz_italy` to our PostGIS database `caaml_data`. QGIS is the quick way to go. Let's go through the screenshot below after having extracted the shapefile from the archive in the folder `data`.

#### Add the shapefile to QGIS

![add shape qgis](./images/add_layer_qgis.png)

We should see something like this:

![view shape qgis](./images/mnz_qgis.png)

#### Create a new PostGIS connection for caaml_data

![open connection qgis](./images/add_pglayer_qgis.png)

Click on `new` for create a new connection

![add connection qgis](./images/dbconnection_qgis.png)

Fill the fields with the same connection parameters used for **PGAdmin4**

![postgis connect qgis](./images/pgconnect_qgis.png)

Click `ok` and then `connect`.

#### Load the shapefile into the connected schema

![open dbmanager qgis](./images/dbmanager_qgis.png)

then click the down arrow icon and fill the fields with the preferences on how the shapefile has to be imported into a PostGIS table.

![load shapefile qgis](./images/pgimport_qgis.png)

Important notes:

- The name of the final table `mzn`
- The name of the geometry column `shape`
- The reprojection from the source SRID `EPSG:32632` to `EPSG:4326` with geographic coordinates
- The setting to create a spatial index for the geometry column