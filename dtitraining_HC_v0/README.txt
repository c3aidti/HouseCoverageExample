A companion dataset for the paper "Quantifying the geographic distribution of building coverage across the US for urban sustainability studies" to be published in Computers, Environment and Urban Systems. This dataset contains three csv files in addition to this Readme file. 

D1_bcr_avr_sd.csv 
-----------------
a csv file with the estimated percentage of building coverage of each census 2010 block group within the urban areas. 145,434 rows and four columns included in this file as follows: 
	GEOID10:  census block group id, 
	BCR    :  (True BCR) Building coverage ratio as a percentage of the available land area of each   
                  census block group. These values are extracted from actual building footprints and 
                  limited to a small number of urban communities; refer to the article for more details.  
                  This data is used for training and validating of the predictive models (ground truth). 
                  Code 9999 indicates that there is no available BCR for this block group; equivalent to column <PRP_BF_LR> in file 	
		  D3_block_group_attribute.      
	avr    :  (modeled BCR) Estimated Building Coverage ratio based on average of predictions from 
                  an ensemble of 1000 models trained using Bagging/Bootstrap aggregating approach.  

	sd     :  Standard deviation of the predictions from the 1000 models


D2_bcr_predictions.csv
----------------------
a csv file with the estimated percentage of building coverage of Census block groups within the urban area. 
The file includes 145,434 rows and 1001 following columns:

	pred1   : Estimated BCR average based on predictive from model1 to model 1000    
	  .
	  .
	pred1000
	
	GEOID10:  census block group id



D3_block_group_attributes.csv
-----------------------------
a csv file with all the urban block groups attributes. 

		
			
Variable name		Area defined	Field Name	Description
*********************************************************************************************************
GEOID="character"	all BG		GEOID10		census block group ID
Prop_urban="numeric"			PROP_URBAN	proportion of "water masked" block group polygon 								(i.e. land area) that overlaps a US census urban 								area polygon
BG_AREA	total BG area
					WAT_AREA	area (sqr m) of open water or swamp (NLCD 								11,90,95) within BG
					DEV_AREA	area (sqr m) of developed land (NLCD 21,22,23,24) 								within BG
					NDEV_AREA	area (sqr m) of undeveloped land (NLCD 		
							12,31,41,42,43,52,53,71,81,82) within BG
					LAND_AREA	total area (sqr m) of land within BG (LAND_AREA = 								sum (DEV_AREA, NLCD_NDEV_AREA))
MEDIAN_AGE="numeric"			MED10_AGE	Median year structure built

All_land 				empty field	land area only	
					DEV_AREA_R	area (sqr m) of developed land (NLCD 21,22,23,24) 
							within BG
					NDEV_AREA_R	area (sqr m) of undeveloped land (NLCD 	
							12,31,41,42,43,52,53,71,81,82) within BG
					LAND_AREA_R	total area (sqr m) of land within BG (= 							DEV_AREA_R + NDEV_AREA_R)
PCT_I_L="numeric" [L]			PCT_I_L		mean % impervious for BG land area (excluding 	
							NLCD water)
PCT_T_L="numeric" [L]			PCT_T_L		mean % tree canopy for BG land area (excluding 
							NLCD water)
PRP_RES_L="numeric" [L]			PRP_RES_LR	proportion of LAND_AREA_R that is classified as 
							residential (NLUD 211-214)
POP_HA_L="numeric" [L]			POP10_HA_LR	total population per hectare land
HU_HA_L="numeric" [L]			HU10_HA_LR	total housing units per hectare land
ROOM_HA_L="numeric" [L]			EROOM_HA_LR	estimated total rooms per hectare land
NLCD_VAR_L="numeric [L]			NLCD_VAR_L	total count of NLCD lc classes (excluding NLCD 
							water)
					NLCD_MAJ_L	most frequent NLCD land cover class (excluding 	
							NLCD water)
NLUD_VAR_L="numeric" [L]		NLUD_VAR_L	total count of NLUD land use classes (excluding 
							NLCD water)
NLUD_MAJ_L="numeric" [L]		NLUD_MAJ_L	most frequent NLUD land use class (excluding NLCD 
							water)


Training and validation Block Groups only (n = 19,328)	
	
					Model_BG	indicates BG was used to develop model (value = 1)
CID="numeric"				CID		community identifier for model BGs
land area only				BF_AREA_LR	sum of building footprint area 
					NO_BF_LR	count of whole and fractional (weighted by 
							proportion within BG) building footprints 
PRP_BF_L="numeric" [L]			PRP_BF_LR	Proportion of BG land area represented by 
							building footprints
					PRP_BF_ISA_LR	Proportion of BG impervious area represented by 
							building footprints

2006-2010 American Community Survey 5yr estimates
	
					MED10_ROOM	median number of rooms per housing unit
					POP10_TOT	Total population
					HU10_TOT	Total number of housing units
					POP10_MOE	total pop margin of error
					HU10_MOE	total housing unit margin of error
					ROOM10_MOE	median rooms per housing unit margin of error
					AGE10_MOE	median age of structure margin of error


2010 TIGER/Line geo identifiers
	
					STATEFP10	state FIPS code
					STATEABBREV	state abbreviation
					GEOID10_CBSA	core-based statistical area (i.e. metro/
							micropolitan area) FIPS code 
					COUNTYFP10	county FIPS code
					TRACTCE10	census tract FIPS code


*********************************************************************************************************

Notes
 
1. Unless otherwise indicated, all area measurements ("AREA") are in square meters	
2. NLCD : National Land Cover Dataset 
3. NLUD : National Land Use Dataset
4. BG: Census Block Group
5. GEOID10 is the key id to link the three csv files
6. emptry fields are used as table markers 


References

U.S. Census Bureau, 2010 census, U.S. Department of Commerce.

U.S. Census Bureau, 2006-2010 american community survey (acs) 5-year estimate data set, U.S. Department of Commerce.

Homer, C., Dewitz, J., Yang, L., Jin, S., Danielson, P., Xian, G., Coulston, J., Herold, N., Wickham, J., Megown. K. Completion of the 2011 national land cover database for the conterminous united states–representing a decade of land cover change information. Photogrammetric Engineering & Remote Sensing 81 (5) (2015) 345–354. 

D. M. Theobald, Development and applications of a comprehensive land use classification and map for the us, PloS one 9 (4) (2014) e94628.

