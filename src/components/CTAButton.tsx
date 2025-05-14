import {
  Text,
  Field,
  withDatasourceCheck,
  Link,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type CTAButtonProps = ComponentProps & {
  fields: {
    ctatext: Field<string>;
    ctalink: LinkField;
  };
};

const CTAButton = (props: CTAButtonProps): JSX.Element => (
  <div className="cta-button">
    <Link field={props.fields.ctalink} className="cta-button-link">
      <Text field={props.fields.ctatext} />
    </Link>
  </div>
);

export default withDatasourceCheck()<CTAButtonProps>(CTAButton);
