import { DynamicModuleLoader, ReducersListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCard, profileReducer } from 'features/EditableProfileCard';
import { Page } from 'shared/ui/Page/Page';

const reducers: ReducersListType = {
  profile: profileReducer,
};

const ProfilePage = () => (
  <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
    <Page>
      <EditableProfileCard />
    </Page>
  </DynamicModuleLoader>
);

export default ProfilePage;
