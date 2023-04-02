import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Logo from "../../src/components/auth/Logo";

describe("app logo render tests", () => {
    it("app logo is rendered", () => {
        renderer.create(<Logo/>);

    })
})