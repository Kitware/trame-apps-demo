#!/usr/bin/env bash
CURRENT_DIR=`dirname "$0"`

# Since Mac doesn't come with realpath by default, let's set the full
# paths using PWD.
pushd .
cd $CURRENT_DIR/..
DEPLOY_DIR=$PWD
cd $CURRENT_DIR/../../..
ROOT_DIR=$PWD
popd

docker run -it --rm         \
    -e TRAME_BUILD_ONLY=1 \
    -v "$DEPLOY_DIR:/deploy" \
    kitware/trame:conda
