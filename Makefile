postinstall:
	@if [[ ! $$HUSKY = "0" ]]; \
		then yarn husky install; \
	fi
