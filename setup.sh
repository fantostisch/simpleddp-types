#!/bin/bash
while read -r patch; do
    patch -R -p 1 -i "patches/$patch"
done < patches/series
quilt push -a
