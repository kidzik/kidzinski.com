+++
# Date this page was created.
date = "2018-11-15"

# Project title.
title = "fcomplete"

# Project summary to display on homepage.
summary = "Statistical software for sparse longitudinal data"

# Optional image to display on homepage (relative to `static/img/` folder).
image_preview = "mini-headers/grouped.png"

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags = ["longitudinal-data","statistics"]

# Optional external URL for project (replaces project detail page).
external_link = ""

# Does the project detail page use math formatting?
math = true

# Optional featured image (relative to `static/img/` folder).
# [header]
# image = "headers/deepart.jpg"
# caption = ""

+++

Suppose we observe N subjects, each subject at multiple timepoints and we want to estimate a trajectory of progression of measurements in individual subjects. For example, suppose you observe BMI of N children at different ages, as presented below

<p align="center">
   <img src="https://s3-eu-west-1.amazonaws.com/kidzinski/kidzinski/fcomplete/grouped.png" width=450 />
</div>

Here, the connected dots come from individual subjects and the black thick line corresponds to the population mean.

**I've build the package to fit trajectories using matrix completion and I described the methodology in my recent paper [Kidziński, Hastie (2018)](https://arxiv.org/abs/1809.08771).** To this end, we discretize the time grid some continous basis and find a low-rank decomposition of the dense matrix.

![Matrix completion and sparse longitudinal completion](https://s3-eu-west-1.amazonaws.com/kidzinski/kidzinski/fcomplete/intro-1.png)

In the classical matrix completion, we look for matrices `W` and `A` that fit the observed points in `Y` (green points in the image above). In our method, in order to impose smoothness, we additionaly assume the basis `B` and again we look for the reprezentation minimizing the errror. 

The interface of the package is based on the mixed-effect models in `R`. In particular, if we are given temporal observations `Y` in the long format with columns `id`, `age` and `bmi`, while additional covariates `X`, constant over time are given as a data frame with columns `id` and, say, `gender`, we can fit the model by writing

```R
model = fregression(bmi ~ age + gender | id, data = Y, covariates = X)
print(model)
```

For more information, please refer to [the manual](https://s3-eu-west-1.amazonaws.com/kidzinski/kidzinski/fcomplete/fcomplete.pdf) and to [vignettes](https://github.com/kidzik/fcomplete/tree/master/vignettes).