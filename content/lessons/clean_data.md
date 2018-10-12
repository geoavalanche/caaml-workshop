---
title: "Clean Data"
---

## Check the integrity of data

Before to move forward and use the data to populate the table that we want to design for the Region entity of the CAAML schema structure we have to check the consistency of the dataset.

There is a problem with duplicates, so let's see how to overcome it (**We are not aware if AINEVA has resolved the issue yet**).

If we run these queries:

```sql
SELECT * from public.mnz where mnz = 'IT25'
SELECT * from public.mnz where mnz = 'IT28'
```

We should expect single record from each resultset but we get duplicates. It would not be a problem from a visualization perspective while it actually is if we want to make the column `mnz` the unique identification for a CAAML feature of type `Region`.

### Removal of duplicates

It's just a matter of few UPDATE SQL queries to get the uniqueness of `mnz`.

```sql
UPDATE public.mnz set mnz = 'IT25a' where id = 37
UPDATE public.mnz set mnz = 'IT25b' where id = 41
UPDATE public.mnz set mnz = 'IT25c' where id = 46
UPDATE public.mnz set mnz = 'IT28a' where id = 40
UPDATE public.mnz set mnz = 'IT28b' where id = 42
```

Obviously the pattern to add a letter it's not acceptable in general but it's the easiest way for this tutorial.