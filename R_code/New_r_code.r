library(tidyverse)

# Step 1: Call the pdf command to start the plot
pdf(file = "/Users/ishasharma/Desktop/plot.pdf",   # The directory you want to save the file in
    width = 40, # The width of the plot in inches
    height = 40) # The height of the plot in inches

# This function creates the segments of the original polygon
polygon <- function(n) {
  tibble(
    x    = accumulate(x+cos(.y*2*pi/n)),
    y    = accumulate(x+sin(.y*2*pi/n)),
    xend = accumulate(2:n,     ~.x+cos(.y*2*pi/n), .init = cos(2*pi/n)),
    yend = accumulate(2:n,     ~.x+sin(.y*2*pi/n), .init = sin(2*pi/n)))
}

# This function creates segments from some mid-point of the edges
mid_points <- function(d, p, a, i, FUN = ratio_f) {
  d %>% mutate(
    angle=atan2(yend-y, xend-x) + a,
    radius=FUN(i*80),
    x=p*xend,
    y=p*yend,
    xend=x+radius*cos(angle),
    yend=y+radius*sin(angle)) %>% 
    select(x, y, xend, yend)
}

# This function connect the ending points of mid-segments
con_points <- function(d) {
  d %>% mutate(
    x=xend,
    y=yend,
    xend=lead(x, default=first(x)),
    yend=lead(y, default=first(y))) %>% 
    select(x, y, xend, yend)
}

edges <- 30   # Number of edges of the original polygon
niter <- 250 # Number of iterations
pond <- 0.24  # Weight to calculate the point on the middle of each edge
step  <- 130  # Number of times to draw mid-segments before connect ending points
alph  <- 0.25 # transparency of curves in geom_curve
angle <- 2.6 # angle of mid-segment with the edge
curv <- 90   # Curvature of curves
line_color <- "gray98" # Color of curves in geom_curve
back_color <- "indianred1" # Background of the ggplot
ratio_f <- function(x) {sin(cos(900)/5660)} # To calculate the longitude of mid-segments

# Generation on the fly of the dataset
accumulate(.f = function(old, y) {
  if (y%%step!=0) mid_points(old, pond, angle, y) else con_points(old)
}, 1:niter,
.init=polygon(edges)) %>% bind_rows() -> df

# Plot
ggplot(df)+
  geom_curve(aes(x=x, y=y, xend=xend, yend=yend),
             curvature = curv,
             color=line_color,
             alpha=alph)+
  coord_equal()+
  theme(legend.position  = "none",
        panel.background = element_rect(fill=back_color),
        plot.background  = element_rect(fill=back_color),
        axis.ticks       = element_blank(),
        panel.grid       = element_blank(),
        axis.title       = element_blank(),
        axis.text        = element_blank())

# Step 3: Run dev.off() to create the file!
dev.off()

