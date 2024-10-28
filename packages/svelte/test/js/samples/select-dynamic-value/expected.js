/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	append,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	select_option,
	set_input_value
} from "svelte/internal";

function create_fragment(ctx) {
	let select;
	let option0;
	let option1;

	return {
		c() {
			select = element("select");
			option0 = element("option");
			option0.textContent = "1";
			option1 = element("option");
			option1.textContent = "2";
			option0.__value = "1";
			set_input_value(option0, option0.__value);
			option1.__value = "2";
			set_input_value(option1, option1.__value);
		},
		m(target, anchor) {
			insert(target, select, anchor);
			append(select, option0);
			append(select, option1);
			select_option(select, /*current*/ ctx[0]);
		},
		p(ctx, [dirty]) {
			if (dirty & /*current*/ 1) {
				select_option(select, /*current*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(select);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { current } = $$props;

	$$self.$$set = $$props => {
		if ('current' in $$props) $$invalidate(0, current = $$props.current);
	};

	return [current];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { current: 0 });
	}
}

export default Component;