# # -------------------------------------------------------------------
# # stage 1
# FROM node:18-alpine3.15 as node

# WORKDIR /usr/src/app

# COPY  package*.json ./

# RUN npm i npm@latest -g

# RUN npm install

# COPY . .

# RUN npm run build

# #stage 2
# FROM nginx:1.13.12-alpine

# # Copy the build output to replace the default nginx contents.
# COPY --from=node /usr/local/app/dist/ /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80
# # =====================

# # FROM nginx:1.13.12-alpine

# # WORKDIR /usr/shere/nginx/html

# # RUN rm -rf ./*


# # COPY --from=node /usr/src/app/dist .
# # RUN chown nginx:nginx /usr/shere/nginx/html/*

# # ENTRYPOINT [ "nginx","-g","daemon off" ]
# # --------------------
# # COPY ./nginx.conf /etc/nginx/conf.d/default.conf


# =======================================

# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# COPY ./package.json /usr/local/app/
# COPY ./package-lock.json /usr/local/app/
# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:1.13.12-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/mainfram /usr/share/nginx/html

# Expose port 80
EXPOSE 80