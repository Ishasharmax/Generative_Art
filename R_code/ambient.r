library(ambient)
library(dplyr)
library(tidyverse)
library(ggplot2)

# # # Step 1: Call the pdf command to start the plot
# pdf(file = "/Users/ishasharma/Desktop/plotsd46de.pdf",   # The directory you want to save the file in
#     width = 40, # The width of the plot in inches
#     height = 40) # The height of the plot in inches
# 


long_grid(x=seq(0, 10, length.out = 1000), y=seq(0, 10, length.out = 1000))%>% 
  mutate(
    x1 = x + gen_simplex(x, y) / 2, 
    y1 = y + gen_simplex(x, y) / 2,
    worley = gen_simplex(x*8000, y*7000, value = 'distance', seed = 500),
    worley_frac =fracture(gen_simplex, billow, octaves = 1,
                          gain = spectral_gain(), x = x, y = y),
    full = blend(normalise(worley), normalise(worley_frac), gen_spheres(x1, y1))
  ) %>% 
  plot(full)


# # Step 3: Run dev.off() to create the file!
# dev.off()


