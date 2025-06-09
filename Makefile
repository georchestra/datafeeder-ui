deb:
	mvn package deb:package -PdebianPackage -DskipTests ${DEPLOY_OPTS}
