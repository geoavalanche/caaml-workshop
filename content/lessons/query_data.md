---
title: "Query our Region features"
---

## How to query our data

Once the application schema datastore is configured we could use the **GetFeature** operation from the **WFS** service to get all the data or a portion of them.

### GetFeature with literal filter

Doing an HTTP *POST* to the *WFS* service url `http://localhost:8080/geoavalanche/ows`

```xml
<wfs:GetFeature service="WFS" version="2.0.0"
  xmlns:caaml="http://caaml.org/Schemas/V5.0/Profiles/BulletinEAWS"
  xmlns:wfs="http://www.opengis.net/wfs/2.0"
  xmlns:fes="http://www.opengis.net/fes/2.0"
  xmlns:gml="http://www.opengis.net/gml/3.2">
  <wfs:Query typeNames="caaml:Region">
    <fes:Filter>
      <fes:PropertyIsLike wildCard="*" singleChar="." escapeChar="\">
        <fes:ValueReference>caaml:name</fes:ValueReference>
        <fes:Literal>Appennino*</fes:Literal>
      </fes:PropertyIsLike>
    </fes:Filter>
  </wfs:Query>
</wfs:GetFeature>
```

We would get something like:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<wfs:FeatureCollection xmlns:wfs="http://www.opengis.net/wfs/2.0" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:caaml="http://caaml.org/Schemas/V5.0/Profiles/BulletinEAWS" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:topp="http://www.openplans.org/topp" xmlns:it.geosolutions="http://www.geo-solutions.it" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" numberMatched="unknown" numberReturned="2" timeStamp="2018-10-11T09:44:10.008Z" xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://localhost:8080/geoavalanche/schemas/wfs/2.0/wfs.xsd http://caaml.org/Schemas/V5.0/Profiles/BulletinEAWS file:/Users/geobart/Development/GeoAvalanche/caaml/CAAMLv5_BulletinEAWS_GA.xsd http://www.opengis.net/gml/3.2 http://localhost:8080/geoavalanche/schemas/gml/3.2.1/gml.xsd">
    <wfs:member>
        <caaml:Region gml:id="region.IT49">
            <caaml:description>Appennino Pesarese</caaml:description>
            <caaml:name>Appennino Pesarese</caaml:name>
            <caaml:regionSubType>ForecastRegion</caaml:regionSubType>
            <caaml:centerPoint>
                <gml:Point srsDimension="2" srsName="urn:ogc:def:crs:EPSG::4326">
                    <gml:pos>43.57463312 12.64107229</gml:pos>
                </gml:Point>
            </caaml:centerPoint>
            <caaml:outline>
                <gml:MultiSurface srsDimension="2" srsName="urn:ogc:def:crs:EPSG::4326">
                    <gml:surfaceMember>
                        <gml:Polygon srsDimension="2">
                            <gml:exterior>
                                <gml:LinearRing>
                                    <gml:posList>43.90485923 12.44807412 43.89968465 12.44719969 43.82635284 12.44702362 43.77034646 12.45594596 43.73129507 12.48606092 43.69734487 12.54069584 43.66438207 12.56300126 43.63790306 12.56547342 43.6277255 12.60929448 43.61219047 12.6366262 43.6226109 12.67763651 43.62716079 12.71829864
                                    <!-- ... -->
                                    43.60720687 12.41662203 43.60701585 12.41657443 43.60677385 12.41627458 43.60666955 12.415811 43.60655881 12.41526149 43.60644978 12.41499357 43.60612679 12.41465469 43.60568709 12.41438005 43.6053249 12.41422325</gml:posList>
                                </gml:LinearRing>
                            </gml:interior>
                        </gml:Polygon>
                    </gml:surfaceMember>
                </gml:MultiSurface>
            </caaml:outline>
        </caaml:Region>
    </wfs:member>
    <wfs:member>
        <caaml:Region gml:id="region.IT50">
            <caaml:description>Appennino Fabrianese</caaml:description>
            <caaml:name>Appennino Fabrianese</caaml:name>
            <caaml:regionSubType>ForecastRegion</caaml:regionSubType>
            <caaml:centerPoint>
                <gml:Point srsDimension="2" srsName="urn:ogc:def:crs:EPSG::4326">
                    <gml:pos>43.24536546 13.11985868</gml:pos>
                </gml:Point>
            </caaml:centerPoint>
            <caaml:outline>
                <gml:MultiSurface srsDimension="2" srsName="urn:ogc:def:crs:EPSG::4326">
                    <gml:surfaceMember>
                        <gml:Polygon srsDimension="2">
                            <gml:exterior>
                                <gml:LinearRing>
                                    <gml:posList>43.38945036 13.16105574 43.38889088 13.16224021 43.38712536 13.21038635 43.37571683 13.20155253 43.36064325 13.21257185 43.34512321 13.23561335 43.35345403 13.24825378 43.36485875 13.25709254 43.38443918 13.28259733 43.38953627 13.30306883 43.39478143 13.31953159 43.40572262 13.34042772 43.41281171 13.38519808 43.40911384 13.40504911 43.387706
                                    <!-- ... -->
                                    12.75240046 43.38219149 12.76360327 43.38026549 12.90827252 43.38975742 12.97324341 43.39085672 13.02560867 43.38665101 13.06153034 43.38900541 13.07777749 43.39385151 13.10626213 43.37264377 13.12493514 43.37733225 13.1574265 43.38945036 13.16105574</gml:posList>
                                </gml:LinearRing>
                            </gml:exterior>
                        </gml:Polygon>
                    </gml:surfaceMember>
                </gml:MultiSurface>
            </caaml:outline>
        </caaml:Region>
    </wfs:member>
</wfs:FeatureCollection>
```

### GetFeature with GeoJSON output

It's still possible among all the supported output formats of **GeoServer**

```shell
curl -X GET http://localhost:8080/geoavalanche/caaml/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=caaml:Region&maxFeatures=1&outputFormat=application/json
```

```json
{
    "type": "FeatureCollection",
    "totalFeatures": "unknown",
    "features": [
        {
            "type": "Feature",
            "id": "region.IT1",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    7.83197134,
                    44.22844477
                ]
            },
            "properties": {
                "outline": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            {...}
                        ]
                    ]
                },
                "description": "Alpi Liguri",
                "name": "Alpi Liguri",
                "regionSubType": "ForecastRegion"
            }
        }
    ],
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:EPSG::4326"
        }
    }
}
```