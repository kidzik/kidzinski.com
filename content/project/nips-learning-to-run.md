+++
# Date this page was created.
date = "2016-04-27"

# Project title.
title = "Learning how to run (NIPS)"

# Project summary to display on homepage.
summary = "Neuromuscular simulations for studying motor control. Official NIPS challenge in 2017 & 2018."

# Optional image to display on homepage (relative to `static/img/` folder).
image_preview = "mini-headers/skeleton-cropped.gif" #l2r.jpg"

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags = ["deep-learning","reinforcement-learning","biomechanics"]

# Optional external URL for project (replaces project detail page).
external_link = ""

# Does the project detail page use math formatting?
math = false

# Optional featured image (relative to `static/img/` folder).
[header]
image = "headers/l2r.jpg"
caption = "Running simulation"

+++

Use my musculoskeletal reinforcement learning environment for other projects in computer science, neuroscience, biomechanics, etc. 

We set up a competition to build models of the brain in the [crowdAI](platform). Competition was accepted as one of the 5 official competitions at  [NIPS 2017](https://www.crowdai.org/challenges/nips-2017-learning-to-run) and one of 8 competitions at [NIPS 2018](https://www.crowdai.org/challenges/nips-2018-ai-for-prosthetics-challenge), attracting over 500 teams from all over the world.

Here are some solutions from the first challenge

{{< youtube rhNxt0VccsE >}}
<br>
You can find the code on [the official website](http://osim-rl.stanford.edu/).

## Getting started

**Anaconda** is required to run our simulations. Anaconda will create a virtual environment with all the necessary libraries, to avoid conflicts with libraries in your operating system. You can get anaconda from here https://www.continuum.io/downloads. In the following instructions we assume that Anaconda is successfully installed.

For the challenge we prepared [OpenSim](http://opensim.stanford.edu/) binaries as a conda environment to make the installation straightforward

We support Windows, Linux, and Mac OSX (all in 64-bit). To install our simulator, you first need to create a conda environment with the OpenSim package.

On **Windows**, open a command prompt and type:

    conda create -n opensim-rl -c kidzik opensim python=3.6.1
    activate opensim-rl

On **Linux/OSX**, run:

    conda create -n opensim-rl -c kidzik opensim python=3.6.1
    source activate opensim-rl

These commands will create a virtual environment on your computer with the necessary simulation libraries installed. Next, you need to install our python reinforcement learning environment. Type (on all platforms):

    conda install -c conda-forge lapack git
    pip install git+https://github.com/stanfordnmbl/osim-rl.git

If the command `python -c "import opensim"` runs smoothly, you are done! Otherwise, please refer to our [FAQ](http://osim-rl.stanford.edu/docs/faq/) section.

Note that `source activate opensim-rl` activates the anaconda virtual environment. You need to type it every time you open a new terminal.

## Basic usage

To execute 200 iterations of the simulation enter the `python` interpreter and run the following:
```python
from osim.env import ProstheticsEnv

env = ProstheticsEnv(visualize=True)
observation = env.reset()
for i in range(200):
    observation, reward, done, info = env.step(env.action_space.sample())
```
![Random walk](https://raw.githubusercontent.com/stanfordnmbl/osim-rl/1679344e509e29bdcc2ee368ddf83e868d93bf61/demo/random.gif)

The function `env.action_space.sample()` returns a random vector for muscle activations, so, in this example, muscles are activated randomly (red indicates an active muscle and blue an inactive muscle).  Clearly with this technique we won't go too far.

Your goal is to construct a controller, i.e. a function from the state space (current positions, velocities and accelerations of joints) to action space (muscle excitations), that will enable to model to travel as far as possible in a fixed amount of time. Suppose you trained a neural network mapping observations (the current state of the model) to actions (muscle excitations), i.e. you have a function `action = my_controller(observation)`, then
```python
# ...
total_reward = 0.0
for i in range(200):
    # make a step given by the controller and record the state and the reward
    observation, reward, done, info = env.step(my_controller(observation))
    total_reward += reward
    if done:
        break

# Your reward is
print("Total reward %f" % total_reward)
```

You can find details about the [observation object here](http://osim-rl.stanford.edu/docs/nips2018/observation/).
