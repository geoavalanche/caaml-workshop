---
title: "Introduction to OGC"
---

The OGC Open Geospatial Consortium is an international member-based organization that develops open standards for the geospatial world through a consensus-based approach.
The OGC consensus process brings together a community of geospatial experts sharing a common pursuit: *interoperability*.

## The importance of open geospatial standards

The geospatial world is notable for the wide variance in the types of software, data and systems used. While many other industries may have the challenge of how to standardise on common operating procedures, due to the huge diversity in technologies, data models, licensing, and data formats the challenge in the geospatial industry is greater.
Without standards and consistent policy, there would be an even larger degree of fragmentation stemming from the lack of interoperability. Interoperability and information integration are key issues for the geospatial world.
In the context of [**INSPIRE**](https://inspire.ec.europa.eu/), interoperability is key to allowing the sharing of data between public sector bodies within a given Member State or between a number of Member States.
There are currently hundreds of products and thousands of references for OGC standards in use worldwide.
There are also community standards which have been defined by extending a *baseline* standard and become a reference implementation for specific sectors. A good example is in the aviation sector where an application profile of the OGC **Geography Markup Language** ([GML](http://www.opengeospatial.org/standards/gml)) called Aeronautical Information Exchange Model ([AIXM](http://www.aixm.aero/public/subsite_homepage/homepage.html)) is used by Eurocontrol in Europe and the Federal Aviation Authority (FAA) in North America for interoperability between aviation datasets.

> So why don't imagine the same success for **CAAML**?

The OGC actively collaborates with numerous other standards organizations. For example, the OGC has relationships with [ISO](https://www.iso.org/). The bridge with ISO, the International Organization for Standardization, is especially strong as OGC standards are often approved as ISO standards. Meaningful examples are e.g. OGC’s Web Feature Service (**WFS**), Web Mapping Service (**WMS**) and the above **GML** which also entered into ISO standards (ISO 19142, ISO 19128 and ISO 19136).

## Common standards

There are a lot of OGC standards which might be potentially interesting for the snow avalanche domain but here we will take into accounts only those related to the visualization of vector and raster datasets within a map and the exchange of their data content.
In addition also the exploitation of remote processes and models over the web will be demonstrated through the use of a common way to execute and chained them into pipelines for generating new data on the fly.

* [GML - Geography Markup Language](http://www.opengeospatial.org/standards/gml)
  it is an XML grammar for expressing geographical features.

    GML serves as a modeling language for geographic systems as well as an open interchange format for geographic transactions on the Internet. As with commonly used XML based grammars, there are two parts of the grammar – the schema that describes the document and the instance document that contains the actual data. A GML document is described using a GML Schema. This allows users and developers to describe generic geographic data sets that contain points, lines and polygons.

* [WMS - Web Mapping Service](http://www.opengeospatial.org/standards/wms)
  it is a web service specification for rendering information on the maps

* [WFS - Web Feature Service](http://www.opengeospatial.org/standards/wfs)
  it is a web service specification for streamlining vector data

* [WCS - Web Coverage Service](http://www.opengeospatial.org/standards/wcs)
  it is a web service specification for streamlining grid data

* [WPS - Web Processing Service](http://www.opengeospatial.org/standards/wps)
  it is a web service specification for running and combining processes

If you want to learn more follow this e-learning course from [OGC](http://cite.opengeospatial.org/pub/cite/files/edu/index.html)