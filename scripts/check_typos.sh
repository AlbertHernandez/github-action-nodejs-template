#!/bin/bash

if ! command -v typos >/dev/null 2>&1; then
    echo "Typos CLI tool is not installed, aborting typo check."
    echo "If you want to install it, you can run 'brew install typos-cli'"
    exit 0 # We don't want to fail the build if the tool is not installed
fi

if [ "$#" -eq 0 ]; then
    files="."
else
    current_dir=$(pwd)
    files=""
    for file in "$@"; do
        if [[ "$file" != *"/dist/"* ]]; then
            relative_file="${file#$current_dir/}"
            files="$files $relative_file"
        fi
    done
fi

if [ -z "$files" ]; then
    echo "No files to check."
    exit 0
fi

typos $files
