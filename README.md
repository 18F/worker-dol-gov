# Worker.gov

This is the public repo for [Worker.gov](http://worker.gov/), which is a tool to help workers learn about and exercise their rights. It represents a joint effort by the U.S. Department of Labor, the Equal Employment Opportunity Commission, the National Labor Relations Board, and the Department of Justice.

## Development
Worker.gov is a [Jekyll](http://jekyllrb.com/) site. For full instructions no using Jekyll, refer to the [Jekyll documentation](http://jekyllrb.com/docs/home/).

To run the site locally, from the project folder, run:

```bash
jekyll serve
```

This will compile the site into the `_site/` folder and run a server.

## Editing content
There are three primary types of pages to know about: concerns pages (e.g. "I was treated unfairly because of my age"), rights pages (e.g. "Equality rights") and action pages (e.g. "DOJ Complaint"). The three types of pages live in their respective folders: `_concerns`, `_rights`, and `_actions`. Each page type uses [YAML front matter](http://jekyllrb.com/docs/frontmatter/) for defining various properties.

### Concerns
The concern page front matter:

```yaml
# The title of the page
title: Age

# The layout template to use, always concern-details
layout: concern-details

# The concern category, i.e. which accordion item, it falls under
# Can be one or more items
concern:
 - I was treated unfairly
 - I was fired or not hired

# The right that this applies to. Can be one more more items
right: equality-rights

# The sentence that describes the concern. This is what is displayed in the accordion and on rights pages
summary: "I was treated unfairly because of my age"

# Optional: The order that the concern should be listed in, both in the accordion and on the rights page
# If empty, they'll just be sorted alphabetically
order: 1

# The name of the "blurb" partial to include at the top of the concern page
blurb: equality

# The action page or pages to link to
actions:
  - action: eeoc-claim
    label: Learn more

# The related links to include in the sidebar
related_links:
  - title: "Age Discrimination"
    url: https://www.eeoc.gov/laws/types/age.cfm
  - title: "Facts About Age Discrimination"
    url: https://www.eeoc.gov/eeoc/publications/age.cfm
  - title: "Age Discrimination"
    url: https://www.dol.gov/general/topic/discrimination/agedisc

# The name of the "contactinfo" blurb to include
contact:
  - contact-eeoc
---
```

In addition to the front matter, concern pages have a content area. This is output between the blurb and the contact information on the page.

### Rights


### Actions

### Blurbs, contact info and sidebars


## Styles
The site uses the U.S. Web Design Standards as a base set of styles, but then adds and modifies several styles.

## Contributing

This site is currently in beta and being built in stages in response to user feedback.

To provide feedback on [Worker.gov](http://worker.gov/), you should follow this [repository](https://github.com/18F/worker-dol-gov) and this [issues tracker](https://github.com/18F/worker-dol-gov/issues).

The easiest way to provide other types of feedback is to email [alphafeedback@dol.gov](mailto:alphafeedback@dol.gov), which will be routed directly to a member of the team.

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
