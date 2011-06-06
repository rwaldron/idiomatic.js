BUILD_DIR = build

PREFIX = .
DIST_DIR = ${PREFIX}/dist
SRC_DIR = ${PREFIX}/src


JS_ENGINE ?= `which node nodejs`
COMPILER = ${JS_ENGINE} ${BUILD_DIR}/uglify.js --unsafe
POST_COMPILER = ${JS_ENGINE} ${BUILD_DIR}/post-compile.js


NAME = $(shell cat project.txt)
SRC = ${SRC_DIR}/${NAME}.js


DIST = ${DIST_DIR}/${NAME}.js
DIST_MIN = ${DIST_DIR}/${NAME}.min.js

all: project min hint
	@@echo "Project build complete."

${DIST_DIR}:
	@@mkdir -p ${DIST_DIR}

project: ${DIST}

${DIST}: ${SRC} | ${DIST_DIR}
	@@echo "Building" ${DIST}
	@@cat ${SRC} > ${DIST}



min: ${DIST_MIN}

${DIST_MIN}: ${DIST}
	@@if test ! -z ${JS_ENGINE}; then \
		echo "Minifying Project" ${DIST_MIN}; \
		${COMPILER} ${DIST} > ${DIST_MIN}.tmp; \
		${POST_COMPILER} ${DIST_MIN}.tmp > ${DIST_MIN}; \
		rm -f ${DIST_MIN}.tmp; \
	else \
		echo "You must have NodeJS installed in order to minify Project."; \
	fi


hint:
	@@if test ! -z ${JS_ENGINE}; then \
		echo "Hinting Project"; \
		${JS_ENGINE} build/jshint-check.js ${DIST}; \
	else \
		echo "Nodejs is missing"; \
	fi


clean:
	@@echo "Removing Distribution directory:" ${DIST_DIR}
	@@rm -rf ${DIST_DIR}


.PHONY: all project hint min
