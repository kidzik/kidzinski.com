+++
title = "Longitudinal data analysis using matrix completion"
date = "2018-11-15"

# Authors. 
authors = ["Łukasz Kidziński", "Trevor Hastie"]

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference proceedings
# 2 = Journal
# 3 = Work in progress
# 4 = Technical report
# 5 = Book
# 6 = Book chapter
publication_types = ["2"]

# Publication name and optional abbreviated version.
publication = "Under review"
publication_short = "Under review"

# Abstract and optional shortened version.
abstract = "In clinical practice and biomedical research, measurements are often collected sparsely and irregularly in time while the data acquisition is expensive and inconvenient. Examples include measurements of spine bone mineral density, cancer growth through mammography or biopsy, a progression of defect of vision, or assessment of gait in patients with neurological disorders. Since the data collection is often costly and inconvenient, estimation of progression from sparse observations is of great interest for practitioners.From the statistical standpoint, such data is often analyzed in the context of a mixed-effect model where time is treated as both random and fixed effect. Alternatively, researchers analyze Gaussian processes or functional data where observations are assumed to be drawn from a certain distribution of processes. These models are flexible but rely on probabilistic assumptions and require very careful implementation. In this study, we propose an alternative elementary framework for analyzing longitudinal data, relying on matrix completion. Our method yields point estimates of progression curves by iterative application of the SVD. Our framework covers multivariate longitudinal data, regression and can be easily extended to other settings. We apply our methods to understand trends of progression of motor impairment in children with Cerebral Palsy. Our model approximates individual progression curves and explains 30% of the variability. Low-rank representation of progression trends enables discovering that subtypes of Cerebral Palsy exhibit different progression trends."
abstract_short = "In clinical practice and biomedical research, measurements are often collected sparsely and irregularly in time while the data acquisition is expensive and inconvenient. We propose an alternative elementary framework for analyzing longitudinal data, relying on matrix completion."

# Featured image thumbnail (optional)
image_preview = ""

# Is this a selected publication? (true/false)
selected = true

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter the filename (excluding '.md') of your project file in `content/project/`.
# projects = ["time-series","functional-data"]

# Links (optional).
url_pdf = "https://arxiv.org/pdf/1809.08771.pdf"
url_preprint = "https://arxiv.org/abs/1809.08771"
url_code = "https://github.com/kidzik/fcomplete"
# url_dataset = "#"
url_project = "https://github.com/kidzik/fcomplete"
# url_slides = "#"
# url_video = "#"
# url_poster = "#"
# url_source = "#"

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
# url_custom = [{name = "Custom Link", url = "http://example.org"}]

# Does the content use math formatting?
math = true

# Does the content use source code highlighting?
highlight = true

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
# image = "headers/bubbles-wide.jpg"
caption = "My caption :smile:"

+++

<!-- More detail can easily be written here using *Markdown* and $\rm \LaTeX$ math code. -->
