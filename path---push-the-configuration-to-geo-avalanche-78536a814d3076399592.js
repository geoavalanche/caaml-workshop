webpackJsonp([0x6709add5cd65],{435:function(e,a){e.exports={data:{postBySlug:{html:'<h2 id="export-the-caaml-application-schema-configuration"><a href="#export-the-caaml-application-schema-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Export the CAAML application schema configuration</h2>\n<p>At the end of the mapping session we should have completed all the mapping properties for our <strong>Region</strong> target type and the Hale window should look like:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/caaml/static/region_mapped_hale-24b5cb80e84ec5cb3ff09b06ee12b947-55f2e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 34.53125%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABb0lEQVQoz4WQ60vbUByG898P2T+w4aqbKPhBBC2uaL3PdlidLkYSJxKbXpKcpLU0SZtr+yw9Q2SfPPDA4f3dXl7FGwwJw5AgCPD8IT3bxbZt/MFAagv8sqfvCNptk25P0O/bFEUh55LJpKz55YzHdDpFcb0hlmXhui5xnJCmqaQrOjTUOlrnCr37j4feDeMoRHfuiNMYZxBi+yFZlmF6TyRZjHKianzdP+Rz7YD1H01J9fqWjv/MYatOy2zx6KqSJ6ExKh3rvkZe5FjOmLYTSLe6azDJIpTmwxmbJ1/Yvf5GTduQnP+plm7u2T7dpq7ucWme8qt9xu9Og5dwhO5pJHlM349KhxFpnmIInXEyQjlQq3yqfWD1fIm15kfJzu2KdHh0dcRP4wLDeXM4jgK5MC8yuWzB4m8IgygNUKwyTNM0ZcCvbzabcfN8wcZxha3WcnmgIvl+t06WZ7I+n8//41VThqMAIYQMdiG+x3t9fwHy4v87K925QwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="mapped region hale"\n        title=""\n        src="/caaml/static/region_mapped_hale-24b5cb80e84ec5cb3ff09b06ee12b947-44d6a.png"\n        srcset="/caaml/static/region_mapped_hale-24b5cb80e84ec5cb3ff09b06ee12b947-f4799.png 173w,\n/caaml/static/region_mapped_hale-24b5cb80e84ec5cb3ff09b06ee12b947-b3b1d.png 345w,\n/caaml/static/region_mapped_hale-24b5cb80e84ec5cb3ff09b06ee12b947-44d6a.png 690w,\n/caaml/static/region_mapped_hale-24b5cb80e84ec5cb3ff09b06ee12b947-bc0f7.png 1035w,\n/caaml/static/region_mapped_hale-24b5cb80e84ec5cb3ff09b06ee12b947-b50e5.png 1380w,\n/caaml/static/region_mapped_hale-24b5cb80e84ec5cb3ff09b06ee12b947-0ed32.png 2070w,\n/caaml/static/region_mapped_hale-24b5cb80e84ec5cb3ff09b06ee12b947-55f2e.png 2560w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Assuming we have our instance of GeoAvalanche running locally at <code>http://localhost:8080/geoavalanche</code> let\'s see how simple is to get CAAML features published from that server:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/caaml/static/export_hale-c607bcd41f07abf43628bcca37b6755f-55f2e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAADAklEQVQ4y32T2WsbVxTG568tNCEvpZAXGxdTO6FQYoq6mKQl0EIKXUhSqshyIku4NXJqxZYdLdYs0oxGM5p912gWn69XKiV9CL3w4wxz7/nOcs/lGr/V0GgJdNpoU6d5QoPTC9KGYzLFKY6PWnj+y0+oPf0VL2sHaDZbaB29wqv6Aaq/V1GtVlE/qKPZaOKwfoiTP9vgBHGMmT4nfsSTPJmQrumUZRmVZUnz+ZxEUYQgiBhdD9HvD9C97K+tpukwDAPsDKSxgovLAfu2wFmWBc/zyDTNNVEcU3lzQyDA8FQI2hXeyud4w7chzYbQHR2SwSNIPLhBjMnMxiKKYQcujFAD9+JkiGfHGh2cevSyk9NhJwezOOxkqL126EVbpfpfFtXOQlxKAZxIh+zKWGQLGE6CoexhmeVwYwezQAX3Y+Nb9OVzUrUp2Y5FjudQlmeUFzk83yNVnZLj2izrkhZpgrEp4doawE9d+GGG0dRHURYsiIJruwfuwbMtnPHHNBj1qDdY8ZZ6/R4pikK6rpMg8CSIAhN1VoKkuxqm3hR5mcELl2tBFoxl7kGPWIbt7jEkRaDZTCV1harSdKqQ7wfU7rfoydE+/fzHQ3r6+jGdjhqwQhN2YiEtFkiXJetdihsm6LOeWokBTpIkOI5DYRhSFEUUBAGCwMfKuoHNemPCYwIrwoWHPM/xf4vzPB+LBYuWpuvDRVG8l3S5RBSGSBhpukDCfJIkWfuGLLhpWoij4J+x+Xdjhe/7iOMYphuwCwgxthI4QYL0PwIra5pzdK/O1jPJqlvD8zy4i+4V3px3IUoTBFGC3mCIs845RoKEwXAEw3KQFzdY5uU7sgK+50CW2DCz4V4tIlrDieylCMxZnxuwmPNkIkMQJSiKiomswLRsRCxQGMbMRqwC9joM9t92kbBK4ugdfuiDq1S+wm7lCSr7P2Dv8z08qtzF99/t4Zsv7+P+5i18vPUR7mx9gp2dHTz64h4+3d3GnY0NbG/fxmebH2Dj9ofY2d3C5r2v8fjhPv4GRhynlRBJ1ZQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="export region hale"\n        title=""\n        src="/caaml/static/export_hale-c607bcd41f07abf43628bcca37b6755f-44d6a.png"\n        srcset="/caaml/static/export_hale-c607bcd41f07abf43628bcca37b6755f-f4799.png 173w,\n/caaml/static/export_hale-c607bcd41f07abf43628bcca37b6755f-b3b1d.png 345w,\n/caaml/static/export_hale-c607bcd41f07abf43628bcca37b6755f-44d6a.png 690w,\n/caaml/static/export_hale-c607bcd41f07abf43628bcca37b6755f-bc0f7.png 1035w,\n/caaml/static/export_hale-c607bcd41f07abf43628bcca37b6755f-b50e5.png 1380w,\n/caaml/static/export_hale-c607bcd41f07abf43628bcca37b6755f-0ed32.png 2070w,\n/caaml/static/export_hale-c607bcd41f07abf43628bcca37b6755f-55f2e.png 2560w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>From the <code>File</code> menu select <code>Export</code> and then click on <code>Alignment</code>:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/caaml/static/export_format_hale-dfe45fc6313a0f18e95db4bc2345112c-526b7.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 78.81679389312978%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAABcUlEQVQ4y+WUW0/CQBCF9///BSNvvqMYExOjiGChgPSStrSU3reFQm/WGIkPx22NRgMPiL45yZfZzU7OTnJ2h8g31xiOefDCPSRJ2qLX64HjOHQ6HXS7XYzH4511HxDPdWHZNmaGAUopDo2n5w3oqgQpy5IJBQiCAHEcf2bf97FeJ3uJFeULRipFe+iAZGmGNEl/RcIuDugSjrcEueJmOG5paLRUhoajpozGmYJTboWLUY7LhxzNfoqT9noviKQY4EYq7voSM0bHYDKFE2Zww7zOXpTDWxRYFa97QebmHIqiYCII0FQVkizD0KcQ2F7XdbjMtKJ43NscIldPgz2Hfn8Anudr4cqYQ4No2hSWNYcoilBZp8bMRJIkSNP0MMG5aULTtBpRFGDbTi2WZTk2m82PIcvFEn/JfxQMwxBb0O94PoXnvUOD7fOv7OxwES3gez5sy67XXT3G+b2K22kM043qqVSNKsoEojCqhaoPUtW+Af6howdU6InbAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="export format hale"\n        title=""\n        src="/caaml/static/export_format_hale-dfe45fc6313a0f18e95db4bc2345112c-44d6a.png"\n        srcset="/caaml/static/export_format_hale-dfe45fc6313a0f18e95db4bc2345112c-f4799.png 173w,\n/caaml/static/export_format_hale-dfe45fc6313a0f18e95db4bc2345112c-b3b1d.png 345w,\n/caaml/static/export_format_hale-dfe45fc6313a0f18e95db4bc2345112c-44d6a.png 690w,\n/caaml/static/export_format_hale-dfe45fc6313a0f18e95db4bc2345112c-bc0f7.png 1035w,\n/caaml/static/export_format_hale-dfe45fc6313a0f18e95db4bc2345112c-526b7.png 1048w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Select <code>App-Schema Configuration [Direct Upload]</code> then click <code>Next</code></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/caaml/static/export_destination_hale-c6f1c08b0f2a7fc1434ad79b52cb8cd0-033d7.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 78.77629063097514%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAABMUlEQVQ4y+2Uy27CMBBF/f8f03XVRR8SQkQF8nAIgZCnYztuUqAs2h23tluCaLtoK5aMdDSj8eiOZXmGzB7uMXYfMQkcUEoRhiFCemQ4HMJxHAwGAxu7U7evs/6z7pAjZVEg10SzCMkyQVVV+Kvt93tsdm9gageCM9h694oRZbh1cpCu7dB1Hdq2RaMa1LIFf9qgVmtLXiuw5hmi3dq8QXYvJwgNU1tkYgOyiGMEAUWWZsjLCou0hDdL9JvOMZoEOl5iSmOM/QguXWBVim+CvbBuSuJobgU910NZlAh8H57naXzbpJHNr6lZDaIahXNyEbwI/kdQCIGvSCH7z2riJKs13MIYP55JCcE/6g/8eENTbDZPpKfIxDcThqs7H9fap4WwG8lMFufcipgJSVepbfAOVMahK8vMhdYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="export destination hale"\n        title=""\n        src="/caaml/static/export_destination_hale-c6f1c08b0f2a7fc1434ad79b52cb8cd0-44d6a.png"\n        srcset="/caaml/static/export_destination_hale-c6f1c08b0f2a7fc1434ad79b52cb8cd0-f4799.png 173w,\n/caaml/static/export_destination_hale-c6f1c08b0f2a7fc1434ad79b52cb8cd0-b3b1d.png 345w,\n/caaml/static/export_destination_hale-c6f1c08b0f2a7fc1434ad79b52cb8cd0-44d6a.png 690w,\n/caaml/static/export_destination_hale-c6f1c08b0f2a7fc1434ad79b52cb8cd0-bc0f7.png 1035w,\n/caaml/static/export_destination_hale-c6f1c08b0f2a7fc1434ad79b52cb8cd0-033d7.png 1046w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Fill the <code>Target URL</code> with the base url for your server <code>http://localhost:8080/geoavalanche</code> and then click <code>Next</code></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/caaml/static/export_optionschema_hale-b0003e3ac64b23a7cf42762b651cfdba-c028b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 78.70722433460075%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAABIUlEQVQ4y+2US0/CQBSF5///Ff+AG9SgfdDSTtMisQRo59VOH0iDEI2bYxliIoGFEpdM8mVy5s6cnFncS+K7AYJgjFH0hDiOT7BtG47jYDgcwrIs+L5/9t43hHOO6fMUjDHMZjOkPUII/HXt3j8h6w1IURQmged5oJQiDEPkeQ6tNcqygJSiR6Kuq/6coW0aU9sHedtujdlm94HxVOHBz0FW7Qrr1zW6rrucdYdSt+CqAWFZjjAIEdEINKRYzJfgjF8MybIMj24Ax3YwckcG13H7r1Oze71OX1Jky+xXECUVKl39G1fDq+ElhoIL7Pv5CHUM4wo5O6Dkaf0nZxPum5/1A2KSTIy+TyrcDCLc0gLp8vAwiRMzNMqiNHoxX0CXGl8nqJk16bGEzwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="export option hale"\n        title=""\n        src="/caaml/static/export_optionschema_hale-b0003e3ac64b23a7cf42762b651cfdba-44d6a.png"\n        srcset="/caaml/static/export_optionschema_hale-b0003e3ac64b23a7cf42762b651cfdba-f4799.png 173w,\n/caaml/static/export_optionschema_hale-b0003e3ac64b23a7cf42762b651cfdba-b3b1d.png 345w,\n/caaml/static/export_optionschema_hale-b0003e3ac64b23a7cf42762b651cfdba-44d6a.png 690w,\n/caaml/static/export_optionschema_hale-b0003e3ac64b23a7cf42762b651cfdba-bc0f7.png 1035w,\n/caaml/static/export_optionschema_hale-b0003e3ac64b23a7cf42762b651cfdba-c028b.png 1052w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Tick the option to include your custom target schema until it\'s not published online and then click <code>Next</code></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/caaml/static/export_workspaces_hale-4ab2dc65c2d2bca5f66c09663d90cbf8-3a75d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 78.74762808349148%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAABkElEQVQ4y7WUiW6CQBCG9/2fpS/QpFc0VStWZemltfWABeSoUSMgGv/ObiuKITRNWpIv/+7OsbOTMMy4vsJ9+x7N7i0MbsAwjIMS9XodjUYD1UoVtVoNrVar0G+/ZqZpgnMd4/EYvd4L+v0+LMvCb77dbodVnMKaLsBc14WmaehQlRrdrus67pp3pBxNUlmhpqrS6SUdvDw/YTQaw/M8OI4Dky6fLSLUuYmLxjuY7/uYzWZ5Pk70J8jP80MIJwDTu120221EUaSYz+d4fHxQN1crFdU/zjneBgMMiMlkgtfXPirU0yAMs7g9zA9CxOttRkS9iJMN9WRN+41ay/Ov/VadSR/ldxS3pzjhkRZRZmMBJUzSbUacpDktosxGCT+QbrYZCT3pWIsos7Eg/IeEa1rsSdZpTosos7Gp52O5ijMWyyinRZTZmLAEpu70z/j7hObEhG3beYQNx3YUcj8cCbx/Y1kHm7Kf+BZW6DouRsOhGklyeNwYLs4uOzjvCPSGNmQMp+EhJ5VMJIRQv6WM+wRt9LW4KJCgtgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="export workspaces hale"\n        title=""\n        src="/caaml/static/export_workspaces_hale-4ab2dc65c2d2bca5f66c09663d90cbf8-44d6a.png"\n        srcset="/caaml/static/export_workspaces_hale-4ab2dc65c2d2bca5f66c09663d90cbf8-f4799.png 173w,\n/caaml/static/export_workspaces_hale-4ab2dc65c2d2bca5f66c09663d90cbf8-b3b1d.png 345w,\n/caaml/static/export_workspaces_hale-4ab2dc65c2d2bca5f66c09663d90cbf8-44d6a.png 690w,\n/caaml/static/export_workspaces_hale-4ab2dc65c2d2bca5f66c09663d90cbf8-bc0f7.png 1035w,\n/caaml/static/export_workspaces_hale-4ab2dc65c2d2bca5f66c09663d90cbf8-3a75d.png 1054w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Double check your workspace configuration and then click <code>Next</code></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/caaml/static/export_datastore_configuration_hale-f87457377530de7bdf80c67561630cad-200fd.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 79.04761904761905%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAABZUlEQVQ4y+2UW0+DMBiG+f+/xHtvTEzULMwlDDZgjPOhg5ZDFJygRi/ca4vZdG5R8domT5qennz5+rXS4vICU02Bol/DNM0DxuMxJpMJRqMRZFmGpmlH922RsixDGIbwPL/vbdtBEAQgSQLDMOD5Hrquw0/t4ekF7KaDVDSPKMsSeZ5DyCmlSNMUBZ/bjl83m29l990zVJvhakogrddrfKWpm0HUtzUoq0DSClJVVhDEUQRDN2BZS/ieB9d1Efg+HIengKeibdtfsRPSjEKdqrAWFsIghM9lhKzQtd0gdsIiL7C0rF7o8QgZY4Nle0KSkD7C+UzHzPKhzC0UdYuq6QYhpauU5y9GwMtGCE1zAVmzMTNdsOpuML3Q57KES0XuojBCsqLYRj4U6a8H/4UfQvGGD2D7EH5JhLzD6OH6Z45GKD6LJI5hL51+fKZSnJzrOFUyeHHeF734qhgXiAchRKI6yqLEGxHbn4awPhZFAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="export datastore configuration hale"\n        title=""\n        src="/caaml/static/export_datastore_configuration_hale-f87457377530de7bdf80c67561630cad-44d6a.png"\n        srcset="/caaml/static/export_datastore_configuration_hale-f87457377530de7bdf80c67561630cad-f4799.png 173w,\n/caaml/static/export_datastore_configuration_hale-f87457377530de7bdf80c67561630cad-b3b1d.png 345w,\n/caaml/static/export_datastore_configuration_hale-f87457377530de7bdf80c67561630cad-44d6a.png 690w,\n/caaml/static/export_datastore_configuration_hale-f87457377530de7bdf80c67561630cad-bc0f7.png 1035w,\n/caaml/static/export_datastore_configuration_hale-f87457377530de7bdf80c67561630cad-200fd.png 1050w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Fill the values for the <strong>PostGIS</strong> datastore connection parameters and then click <code>Next</code></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/caaml/static/export_authentication_hale-31e5047226ec835f4c5a432655eaca71-526b7.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 79.19847328244275%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAABR0lEQVQ4y+3UXW+CMBQGYP7/b9n11EzQsalZEGEVv8CNgi20bKhxMVt28640bomZMYarXYzkCeXk5E0b2hrEMuG6Qzz49yCE/NLv9zEYDGDbNnq9HhzHOdn3zUjTFPPZDFEUaXWf/fsnWLGDsdlswDlDlmWQUkAWBfI8VzUOxg51IXQtSRIUxQtoHKteqcaFDtvtPzCccnQdCqN8LbHdbrV1ua6lLEswLkFTAYMzjmW0RBguMQoWiJmEKHe1GfPpHN7IQzCLMAlj7Xmllr5+q0XPUAqp5ckCrWYLHauDZqOpx5ZpoX3TRkN933a6MNsm7uw7+J6PkethEkxAHokWLsLjwHNEXv0YJcvP9l0ceKn/wL8YuEpX+rwe4ZfjLANN+AE7PUOhLoOEUgTj4GcPVsezCqj2YfUek7G+PJ5ohmuX4coiaPkCX+g3moG5VVYOAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="export authentication hale"\n        title=""\n        src="/caaml/static/export_authentication_hale-31e5047226ec835f4c5a432655eaca71-44d6a.png"\n        srcset="/caaml/static/export_authentication_hale-31e5047226ec835f4c5a432655eaca71-f4799.png 173w,\n/caaml/static/export_authentication_hale-31e5047226ec835f4c5a432655eaca71-b3b1d.png 345w,\n/caaml/static/export_authentication_hale-31e5047226ec835f4c5a432655eaca71-44d6a.png 690w,\n/caaml/static/export_authentication_hale-31e5047226ec835f4c5a432655eaca71-bc0f7.png 1035w,\n/caaml/static/export_authentication_hale-31e5047226ec835f4c5a432655eaca71-526b7.png 1048w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Fill the values for the administration of <strong>GeoAvalanche</strong> server. By default they are set up to <code>admin/geoserver</code></p>\n<p>Then click <code>Finish</code> and wait for the completion of the upload. Once finished you can close <strong>Hale</strong> and play with the <strong>Region</strong> features</p>\n<p>Visit the <code>Layer Preview</code> page of GeoAvalanche and you should see a new layer in the list which is named <code>caaml:Region</code>:</p>\n<p></p>\n<p>We have just successfully created a new app-schema datastore in GeoAvalanche. Let\'s see now how we can query our regions.</p>',timeToRead:2,excerpt:"Export the CAAML application schema configuration At the end of the mapping session we should have completed all the mapping properties for…",frontmatter:{title:"Push the configuration to GeoAvalanche",cover:null,date:null,category:null,tags:null}},tableOfContents:{chapters:[{title:"1. Introduction",entries:null,chapters:[{title:"1.1 OGC Standards",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_ogc.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-ogc"},frontmatter:{title:"Introduction to OGC"}}}}],chapters:[{title:"1.1.1 Web Mapping Service",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_wms.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-wms"},frontmatter:{title:"Introduction to WMS"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/examples_wms.md absPath of file",childMarkdownRemark:{fields:{slug:"/wms-examples"},frontmatter:{title:"WMS Examples"}}}}]},{title:"1.1.2 Web Feature Service",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_wfs.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-wfs"},frontmatter:{title:"Introduction to WFS"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/examples_wfs.md absPath of file",childMarkdownRemark:{fields:{slug:"/wfs-examples"},frontmatter:{title:"WFS Examples"}}}}]},{title:"1.1.3 Web Coverage Service",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_wcs.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-wcs"},frontmatter:{title:"Introduction to WCS"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/examples_wcs.md absPath of file",childMarkdownRemark:{fields:{slug:"/wcs-examples"},frontmatter:{title:"WCS Examples"}}}}]},{title:"1.1.4 Web Processing Service",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_wps.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-wps"},frontmatter:{title:"Introduction to WPS"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/examples_wps.md absPath of file",childMarkdownRemark:{fields:{slug:"/wps-examples"},frontmatter:{title:"WPS Examples"}}}}]}]},{title:"1.2 CAAML",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_caaml.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-caaml"},frontmatter:{title:"Introduction to CAAML"}}}}],chapters:null},{title:"1.3 INSPIRE",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_inspire.md absPath of file",childMarkdownRemark:{fields:{slug:"/introduction-to-inspire"},frontmatter:{title:"Introduction to INSPIRE"}}}}],chapters:null}]},{title:"2. Standards in action",entries:null,chapters:[{title:"2.1 Prepare data and toolkit",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/intro_data_tools.md absPath of file",childMarkdownRemark:{fields:{slug:"/data-and-geospatial-tools"},frontmatter:{title:"Data and geospatial tools"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/bootstrap_servers.md absPath of file",childMarkdownRemark:{fields:{slug:"/start-the-environment"},frontmatter:{title:"Start the environment"}}}}],chapters:[{title:"2.1.1 Manage the data",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/load_data.md absPath of file",childMarkdownRemark:{fields:{slug:"/load-data"},frontmatter:{title:"Load Data"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/clean_data.md absPath of file",childMarkdownRemark:{fields:{slug:"/clean-data"},frontmatter:{title:"Clean Data"}}}}]},{title:"2.1.2 Design the CAAML schema",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/er_design.md absPath of file",childMarkdownRemark:{fields:{slug:"/caaml-model-design"},frontmatter:{title:"CAAML model design"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/populate_data.md absPath of file",childMarkdownRemark:{fields:{slug:"/populate-region"},frontmatter:{title:"Populate Region"}}}}]}]},{title:"2.2 Build CAAML with GeoAvalanche",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/caaml_hale.md absPath of file",childMarkdownRemark:{fields:{slug:"/configure-the-application-schema-for-caaml"},frontmatter:{title:"Configure the application schema for CAAML"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/load_configuration.md absPath of file",childMarkdownRemark:{fields:{slug:"/push-the-configuration-to-geo-avalanche"},frontmatter:{title:"Push the configuration to GeoAvalanche"}}}},{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/query_data.md absPath of file",childMarkdownRemark:{fields:{slug:"/query-our-region-features"},frontmatter:{title:"Query our Region features"}}}}],chapters:null}]},{title:"3. Main Chapter",entries:[{entry:{id:"/Users/geobart/Development/GeoAvalanche/ogc-caaml-inspire/content/lessons/lesson_six.md absPath of file",childMarkdownRemark:{fields:{slug:"/lesson-six"},frontmatter:{title:"Lesson Six"}}}}],chapters:null}]}},pathContext:{slug:"/push-the-configuration-to-geo-avalanche"}}}});
//# sourceMappingURL=path---push-the-configuration-to-geo-avalanche-78536a814d3076399592.js.map