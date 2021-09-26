import { compose, withState } from 'recompose';

import SearchResultScreen from './SearchResultView';

export default compose(withState('isExtended', 'setIsExtended', false))(
    SearchResultScreen,
);