webpackJsonp([46114540067543],{428:function(e,t){e.exports={data:{postBySlug:{html:'<h2 id="what-it-is"><a href="#what-it-is" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What it is</h2>\n<p>WMS is a standard service interface which presents location information in an image format that can then be displayed in a map viewer, typically overlaid against a base map layer.</p>\n<p>A user application can readily request a map to be delivered based on the location of interest. These web client applications are able to request the maps from a WMS server via simple and familiar URLs. A map returned through a WMS is a visual portrayal of the data rather than the actual mapping data.</p>\n<p>WMS also operates in a truly distributed manner allowing individual maps to be located and requested from different servers. WMS thus enables the creation of a network of distributed map servers from which clients can build customized maps.</p>\n<p>The OGC WMS standard is one of the standards referred to in the INSPIRE Technical Guidance to deliver an INSPIRE View Service. It has also been adopted as an ISO standard, ISO 19128.</p>\n<h2 id="allowed-operations"><a href="#allowed-operations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Allowed operations</h2>\n<p>Three WMS operations are defined in the specification that allows to call:</p>\n<h4 id="getcapabilities"><a href="#getcapabilities" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GetCapabilities</h4>\n<p>HTTP call to retrieve service-level metadata</p>\n<h4 id="getmap"><a href="#getmap" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GetMap</h4>\n<p>HTTP call to get a map with the requested geographic parameters</p>\n<h4 id="getfeatureinfo"><a href="#getfeatureinfo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GetFeatureInfo</h4>\n<p>HTTP call to get information about specific features based on their location in the map</p>',timeToRead:1,excerpt:"What it is WMS is a standard service interface which presents location information in an image format that can then be displayed in a map…",frontmatter:{title:"Introduction to WMS",cover:null,date:null,category:null,tags:null}},tableOfContents:{chapters:[{title:"1. Introduction",entries:null,chapters:[{title:"1.1 OGC Standards",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_ogc.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-ogc"},frontmatter:{title:"Introduction to OGC"}}}}],chapters:[{title:"1.1.1 Web Mapping Service",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_wms.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-wms"},frontmatter:{title:"Introduction to WMS"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/examples_wms.md absPath of file",childMarkdownRemark:{fields:{slug:"/wms-examples"},frontmatter:{title:"WMS Examples"}}}}]},{title:"1.1.2 Web Feature Service",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_wfs.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-wfs"},frontmatter:{title:"Introduction to WFS"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/examples_wfs.md absPath of file",childMarkdownRemark:{fields:{slug:"/wfs-examples"},frontmatter:{title:"WFS Examples"}}}}]},{title:"1.1.3 Web Coverage Service",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_wcs.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-wcs"},frontmatter:{title:"Introduction to WCS"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/examples_wcs.md absPath of file",childMarkdownRemark:{fields:{slug:"/wcs-examples"},frontmatter:{title:"WCS Examples"}}}}]},{title:"1.1.4 Web Processing Service",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_wps.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-wps"},frontmatter:{title:"Introduction to WPS"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/examples_wps.md absPath of file",childMarkdownRemark:{fields:{slug:"/wps-examples"},frontmatter:{title:"WPS Examples"}}}}]}]},{title:"1.2 CAAML",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_caaml.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-caaml"},frontmatter:{title:"Introduction to CAAML"}}}}],chapters:null},{title:"1.3 INSPIRE",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_inspire.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-inspire"},frontmatter:{title:"Introduction to INSPIRE"}}}}],chapters:null}]},{title:"2. Standards in action",entries:null,chapters:[{title:"2.1 Prepare data and toolkit",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_data_tools.md absPath of file",childMarkdownRemark:{fields:{slug:"/data-and-geospatial-tools"},frontmatter:{title:"Data and geospatial tools"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/bootstrap_servers.md absPath of file",childMarkdownRemark:{fields:{slug:"/start-the-environment"},frontmatter:{title:"Start the environment"}}}}],chapters:[{title:"2.1.1 Manage the data",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/load_data.md absPath of file",childMarkdownRemark:{fields:{slug:"/load-data"},frontmatter:{title:"Load Data"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/clean_data.md absPath of file",childMarkdownRemark:{fields:{slug:"/clean-data"},frontmatter:{title:"Clean Data"}}}}]},{title:"2.1.2 Design the CAAML schema",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/er_design.md absPath of file",childMarkdownRemark:{fields:{slug:"/caaml-model-design"},frontmatter:{title:"CAAML model design"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/populate_data.md absPath of file",childMarkdownRemark:{fields:{slug:"/populate-region"},frontmatter:{title:"Populate Region"}}}}]}]},{title:"2.2 Build CAAML with GeoAvalanche",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/caaml_hale.md absPath of file",childMarkdownRemark:{fields:{slug:"/configure-the-application-schema-for-caaml"},frontmatter:{title:"Configure the application schema for CAAML"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/load_configuration.md absPath of file",childMarkdownRemark:{fields:{slug:"/push-the-configuration-to-geo-avalanche"},frontmatter:{title:"Push the configuration to GeoAvalanche"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/query_data.md absPath of file",childMarkdownRemark:{fields:{slug:"/query-our-region-features"},frontmatter:{title:"Query our Region features"}}}}],chapters:null}]},{title:"3. Main Chapter",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/lesson_six.md absPath of file",childMarkdownRemark:{fields:{slug:"/lesson-six"},frontmatter:{title:"Lesson Six"}}}}],chapters:null}]}},pathContext:{slug:"/introduction-to-wms"}}}});
//# sourceMappingURL=path---introduction-to-wms-b49c8850a2aecdc5bd03.js.map