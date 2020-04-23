DEPLOY_TARGET=../public/

rm -rf $DEPLOY_TARGET
mkdir $DEPLOY_TARGET
cp -rf build/*/* $DEPLOY_TARGET