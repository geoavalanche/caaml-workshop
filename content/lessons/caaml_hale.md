---
title: "Configure the application schema for CAAML"
---

## Configure the mapping

Our goal is to build a mapping between the schema that has been implemented in the `caaml_data` database and our small portion of the EAWS CAAML schema `CAAMLv5_BulletinEAWS_GA.xsd`.

Open Hale Studio for the goal of this section:

![hale](./images/hale.png)

### Check the GeoAvalanche compatibility mode

If we want to work with the GeoAvalanche server in order to upload the mapping configuration of CAAML as new GML application schema datastore we have to double check that Hale is properly set up and the compatibility mode is on.
Select *Transformation* → *Compatibility mode* → *GeoServer* from the menu. You should see Geo appearing close to a green tick mark icon at the status bar on the bottom right side:

![compatibility hale](./images/compatibility_hale.png)

### Mapping strategy

* one-to-one relation between source types and the correspondent target type will be established using the **Retype** function. In this basic example, the **caaml_Region** source type has a simple correlation to the **Region** target type, so that we can expect for each record in the *caaml_Region* table a correspondent *Region* feature has to be created in order to support the EAWS CAAML schema
* Once the **Retype** relation has been created we want to map the properties from the source table to the XML properties of the target

Things can be a little more complex for complex relations like **Bulletin**, **BulletinMeasurements** and **LocationCollection**, just to mention few, but the concept of mapping would still continue to be valid.

### Configure source and target schema

#### Set the source schema

![source hale](./images/source_hale.png)

Define the source as a JDBC connection:

![source connection hale](./images/source_connection_hale.png)

Once imported the source then edit the relevant source types of interest:

![edit source hale](./images/edit_source_hale.png)

And choice what you are interested in mapping, for now just `caaml_Region` is fine:

![choice types hale](./images/choice_source_hale.png)

#### Set the target schema

![target hale](./images/target_hale.png)

Define the source as a file resource (the modified XSD CAAML schema is part of the data package):

![target file hale](./images/target_file_hale.png)

Then click on `Next`

![setting target hale](./images/setting_target_hale.png)

Finally click on `Finish`

### Configure the relation between source and target entities

We will now define the *caaml_Region* → *Region* relation (our case is the simplest one):

![set relation hale](./images/retype_hale.png)

* Select the `caaml_Region` type in the *Source* section of the *Schema Explorer* view;

* Select the `Region` type in the *Target* section of the *Schema Explorer* view

* Click on the blue bi-directional arrow icon in between the *Source* and *Target* sections of the *Schema Explorer* view and select *Retype* from the popup menu

![select retype hale](./images/select_retype_hale.png)

Verify from the popup window that the entities are those previously selected and click on the button `Next` and then `Finish` on the next window.

![new retype hale](./images/executed_retype_hale.png)

A new retype mapping will be added in the *Assignment* view.

### Configure the relation between source and target properties

Once the type relation have been assigned, it is time to configure the relations between source and target properties.

#### ID property as Formatted String

The mapping between the source and target is not completely done because we want more. Specifically we'd like to have a reword of the GML identification `id` of the **Region** feature. Effectively we want to end up to something like this:

```xml
<caaml:Region gml:id="region.IT1">
```

In order to achieve that we have to add a new mapping property:

* Expand the list under the *caaml_Region* and *Region* types, then select the `ID` attribute from the *Source* type of the *Schema Explorer* view and finally select `id` attribute from the *Target* type of the *Schema Explorer* view:

![ID retype hale](./images/id_retype_hale.png)

then click on `Formatted String` item

![ID selection retype hale](./images/id_selection_retype_hale.png)

double check source and target variables then click `Next`

![ID formatted retype hale](./images/id_formatted_retype_hale.png)

assign the format pattern for the retype which is in our case `region.{ID}`

![ID formatted string hale](./images/id_formatted_string_hale.png)

you finally should see a new mapping item in the *Alignment* view

#### General properties as Rename

We want then to configure the remaining properties as a simple pass through from source to target type. So we can see how it works for one of them and then apply the concept to the rest.

Let's apply the **Rename** to `description`:

* Expand the list under the *caaml_Region* and *Region* types, then select the `description` attribute from the *Source* type of the *Schema Explorer* view and finally select `description` attribute from the *Target* type of the *Schema Explorer* view:

![description rename hale](./images/description_rename_hale.png)

then click on `Rename` item

![description selection rename hale](./images/description_selection_rename_hale.png)

double check source and target property then click `Next`

![description selection rename hale](./images/description_params_rename_hale.png)

Leave parameters as it is and click `Finish`

![description renamed hale](./images/description_renamed_hale.png)

You should now see the *Alignment* view updated with the *Rename* mapping for `description`. Then it's just a matter of applying the same to all properties from the source type.
