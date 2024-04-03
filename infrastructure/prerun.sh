#!/bin/bash

# Script: prerun.sh
# Author: bustravelDevs
# Email: bustravel@bustravel.com
# Description: This script creates the needed external
# volumes and network for the Bus Travel Docker
# Compose setup.

# Create external volumes
docker volume create --name btpostgres
docker volume create --name btpostgres
docker volume create --name btpostgres-data
docker volume create --name btpgadmin

# Create external network
docker network create bustravel