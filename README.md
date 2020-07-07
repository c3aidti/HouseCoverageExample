# House Coverage Example

This example is a simplified version from a GIS project "Dataset for: Quantifying the geographic distribution of building coverage across the US for urban sustainability studies".

(original project link: https://databank.illinois.edu/datasets/IDB-4137411)

This is a good starting package to show how both integration of dataset and prediction works on C3.ai Suite. We implement it first using plain tensorflow and python which you can find in the tensorflow directory while showing how to extract data from C3.ai. Secondly, we implement the similar code on the C3 platform in the C3 directory. We use the KerasPipe Type to encapsulate the tensorflow models. 

## Python Implementation
Before install the env file, first you will need to download the helper function of c3python at: https://github.com/c3aidti/c3python. Extracting the setup.py and c3python folder under ./tensorflow/ folder.

In order to execute the python implementation, first use conda to install a new environment with the packages contained in env.yml.
```
conda env create -p ./venv -f ./env.yml
```
Then, load the environment, and launch jupyter notebook.
```
conda activate ./venv
jupyter notebook
```
Finally, open House_Coverage_Example.ipynb and execute its cells!

## C3 Implementation
Since some of the packages are still depending on your local environment, you will still need to install a new environment with the packages contained in env.yaml.
```
conda create -p ./venv -f ./env.yaml
```
Then, load the environment, and launch jupyter notebook.
```
conda activate ./venv
jupyter notebook
```
To execute the C3 implementation, first provision the code in the directory c3/dtitraining to your C3.ai tag. Once finished, open the jupyter notebook c3/House_Coverage_Example.ipynb and connect to your c3 session if necessary. Then execute the notebook cells!

## Citation:

Soliman, Aiman; Mackay, Andrew; Schmidt , Arthur; Allan, Brian; Wang, Shaowen (2018): Dataset for: Quantifying the geographic distribution of building coverage across the US for urban sustainability studies. University of Illinois at Urbana-Champaign. https://doi.org/10.13012/B2IDB-4137411_V1

Special thanks for Dr. Aiman Soliman for all the helps.


