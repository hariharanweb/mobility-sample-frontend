import {render, screen, act} from "@testing-library/react";
import LocationSearch from "./LocationSearch";

let onPlaceChanged;
let onLoad;
jest.mock('@react-google-maps/api', () => {
    return {
        'Autocomplete': (props) => {
            onPlaceChanged = props.onPlaceChanged;
            onLoad = props.onLoad;
            return (
                <div>
                    {props.children}
                </div>
            )
        }
    }
})
describe('Location Search', () => {
    it('Should initialize with given initial location and label', () => {
        render(
            <LocationSearch
                label="test_label"
                initialLocation={{
                    display: "ONDC, New Delhi"
                }}
                onLocationChange={() => {
                }}
            />
        )
        expect(screen.getByText('test_label')).toBeInTheDocument()
        expect(screen.getByDisplayValue('ONDC, New Delhi')).toBeInTheDocument()
    })
    it('onPlaceChanged should change location', () => {
        render(
            <LocationSearch
                label="test_label"
                initialLocation={{
                    display: "ONDC, New Delhi"
                }}
                onLocationChange={() => {
                }}
            />
        )
        act(() => onLoad(
            {
                getPlace: () => ({
                    name: "Mg Road, Bangalore",
                    geometry: {
                        location: {
                            lat: ()=> ("11"),
                            lng: ()=> ("22")
                        }
                    }
                }),
                gm_accessors_: {
                    place: {
                        jj: {
                            formattedPrediction: "Mg Road, Bangalore"
                        }
                    }
                }
            }
        ))
        act(()=> {
            onPlaceChanged()
        })
        expect(screen.getByDisplayValue('Mg Road, Bangalore')).toBeInTheDocument()
    })
});
