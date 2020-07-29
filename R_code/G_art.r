library(generativeart)

# set the paths
IMG_DIR <- "imagesArt/"
IMG_SUBDIR <- "allImages/"
IMG_PATH <- paste0(IMG_DIR, IMG_SUBDIR)

LOGFILE_DIR <- "logfile/"
LOGFILE <- "logfile.csv"
LOGFILE_PATH <- paste0(LOGFILE_DIR, LOGFILE)

# create the directory structure
generativeart::setup_directories(IMG_DIR, IMG_SUBDIR, LOGFILE_DIR)

# include a specific formula, for example:
my_formula <- list(
  x = quote(runif(1, -1, 1) * x_i^2 - sin(y_i^2)),
  y = quote(runif(1, -1, 1) * y_i^3 - cos(x_i^2))
)

my_formula1 <- list(
  x = quote(runif(10, 3, 4000)* x_i^22 - (1/x_i)^2),
  y = quote(runif(10,  3,  4000)* y_i^22 - (1/x_i)^2)
)

# call the main function to create five images with a polar coordinate system
generativeart::generate_img(formula = my_formula, nr_of_img = 2, polar = TRUE, filetype = "png", color = "lavender", background_color = "deepskyblue4")

