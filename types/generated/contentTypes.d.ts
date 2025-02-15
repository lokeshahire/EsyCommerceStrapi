import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiCaseCardCaseCard extends Struct.CollectionTypeSchema {
  collectionName: 'case_cards';
  info: {
    description: '';
    displayName: 'CaseCard';
    pluralName: 'case-cards';
    singularName: 'case-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    CaseCardBgColor: Schema.Attribute.String;
    CaseCardBorder: Schema.Attribute.String;
    CaseCardBorderRadius: Schema.Attribute.String;
    CaseCardDes: Schema.Attribute.String;
    CaseCardDesColor: Schema.Attribute.String;
    CaseCardDesFontSize: Schema.Attribute.String;
    CaseCardDesMarginTop: Schema.Attribute.String;
    CaseCardHeight: Schema.Attribute.String;
    CaseCardHeightMob: Schema.Attribute.String;
    CaseCardImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    CaseCardMarginTop: Schema.Attribute.String;
    CaseCardName: Schema.Attribute.String;
    CaseCardNameBgColor: Schema.Attribute.String;
    CaseCardNameBorderRadius: Schema.Attribute.String;
    CaseCardNameColor: Schema.Attribute.String;
    CaseCardNameFontSize: Schema.Attribute.String;
    CaseCardNameLeft: Schema.Attribute.String;
    CaseCardNamePadding: Schema.Attribute.String;
    CaseCardNameTop: Schema.Attribute.String;
    CaseCardNameTransform: Schema.Attribute.String;
    CaseCardNameWidth: Schema.Attribute.String;
    CaseCardNameWidthMob: Schema.Attribute.String;
    CaseCardNameZIndex: Schema.Attribute.String;
    CaseCardNo1: Schema.Attribute.String;
    CaseCardNo2: Schema.Attribute.String;
    CaseCardNo3: Schema.Attribute.String;
    CaseCardNoBgColor: Schema.Attribute.String;
    CaseCardNoHeight: Schema.Attribute.String;
    CaseCardNoMargin: Schema.Attribute.String;
    CaseCardNoWidth: Schema.Attribute.String;
    CaseCardPadding: Schema.Attribute.String;
    CaseCardRead: Schema.Attribute.String;
    CaseCardReadBorderBottom: Schema.Attribute.String;
    CaseCardReadColor: Schema.Attribute.String;
    CaseCardReadMargin: Schema.Attribute.String;
    CaseCardReadPaddingTop: Schema.Attribute.String;
    CaseCardReadUrl: Schema.Attribute.String;
    CaseCardReadWidth: Schema.Attribute.String;
    CaseCardSpan: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    imageUrlHeight: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-card.case-card'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCaseFooterCaseFooter extends Struct.CollectionTypeSchema {
  collectionName: 'case_footers';
  info: {
    description: '';
    displayName: 'CaseFooter';
    pluralName: 'case-footers';
    singularName: 'case-footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FooterBelowMarginTop: Schema.Attribute.String;
    FooterCopy: Schema.Attribute.String;
    FooterCopyBorder: Schema.Attribute.String;
    FooterCopyFontSize: Schema.Attribute.String;
    FooterCopyMarginTop: Schema.Attribute.String;
    FooterCopyWidth: Schema.Attribute.String;
    FooterLeftColor: Schema.Attribute.String;
    FooterLeftFontsize: Schema.Attribute.String;
    FooterLeftMaxWidth: Schema.Attribute.String;
    FooterLeftSocial1: Schema.Attribute.String;
    FooterLeftSocial1FontSie: Schema.Attribute.String;
    FooterLeftSocial2: Schema.Attribute.String;
    FooterLeftSocialGap: Schema.Attribute.String;
    FooterLeftSocialMarginTop: Schema.Attribute.String;
    FooterLeftText: Schema.Attribute.String;
    FooterLeftWidth: Schema.Attribute.String;
    FooterLeftWidthMob: Schema.Attribute.String;
    FooterLogo: Schema.Attribute.String;
    FooterLogoColor: Schema.Attribute.String;
    FooterLogoFontWeight: Schema.Attribute.String;
    FooterMarginTop: Schema.Attribute.String;
    FooterPadding: Schema.Attribute.String;
    FooterRight1: Schema.Attribute.String;
    FooterRight2: Schema.Attribute.String;
    FooterRight2FontSize: Schema.Attribute.String;
    FooterRight2Margin: Schema.Attribute.String;
    FooterRight3: Schema.Attribute.String;
    FooterRight4: Schema.Attribute.String;
    FooterRighttextAlign: Schema.Attribute.String;
    FooterRightWidth: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-footer.case-footer'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    UpFooter: Schema.Attribute.String;
    UpFooterBorder: Schema.Attribute.String;
    UpFooterBorderRadius: Schema.Attribute.String;
    UpFooterColor: Schema.Attribute.String;
    UpFooterFontSize: Schema.Attribute.String;
    UpFooterPadding: Schema.Attribute.String;
    UpFooterPaddingMob: Schema.Attribute.String;
  };
}

export interface ApiCaseStudyCaseStudy extends Struct.CollectionTypeSchema {
  collectionName: 'case_studies';
  info: {
    description: '';
    displayName: 'CaseTop';
    pluralName: 'case-studies';
    singularName: 'case-study';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    CaseStudiesHead: Schema.Attribute.String;
    CaseStudiesHeadColor: Schema.Attribute.String;
    CaseStudiesHeadFontSize: Schema.Attribute.String;
    CaseStudiesHeadFontSizeMob: Schema.Attribute.String;
    CaseStudiesHeadfontWeight: Schema.Attribute.String;
    CaseStudiesmaxWidth: Schema.Attribute.String;
    CaseStudiesmaxWidthMob: Schema.Attribute.String;
    CaseStudiesText: Schema.Attribute.String;
    CaseStudiesTextColor: Schema.Attribute.String;
    CaseStudiesTextFontSize: Schema.Attribute.String;
    CaseStudiesTextFontSizeMob: Schema.Attribute.String;
    CaseStudiesTextFontWeight: Schema.Attribute.String;
    CaseStudiesTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Success Stories & Results'>;
    CaseStudiesTitleColor: Schema.Attribute.String;
    CaseStudiesTitleFontSize: Schema.Attribute.String;
    CaseStudiesTitleTop: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeEnhanceHomeEnhance extends Struct.CollectionTypeSchema {
  collectionName: 'home_enhances';
  info: {
    description: '';
    displayName: 'HomeEnhance';
    pluralName: 'home-enhances';
    singularName: 'home-enhance';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    HomeEnhanceCard: Schema.Attribute.Component<
      'card1.home-enhance-card',
      true
    >;
    HomeEnhanceCardBg: Schema.Attribute.String;
    HomeEnhanceCardBorder: Schema.Attribute.String;
    HomeEnhanceCardCursor: Schema.Attribute.String;
    HomeEnhanceCardFlex: Schema.Attribute.String;
    HomeEnhanceCardGap: Schema.Attribute.String;
    HomeEnhanceCardHeadColor: Schema.Attribute.String;
    HomeEnhanceCardHeadFontSize: Schema.Attribute.String;
    HomeEnhanceCardHeadWeight: Schema.Attribute.String;
    HomeEnhanceCardHeadWidth: Schema.Attribute.String;
    HomeEnhanceCardHeight: Schema.Attribute.String;
    HomeEnhanceCardImgURLHeight: Schema.Attribute.String;
    HomeEnhanceCardImgURLMarginBtm: Schema.Attribute.String;
    HomeEnhanceCardImgURLwidth: Schema.Attribute.String;
    HomeEnhanceCardLiColor: Schema.Attribute.String;
    HomeEnhanceCardLiFontSize: Schema.Attribute.String;
    HomeEnhanceCardLiGap: Schema.Attribute.String;
    HomeEnhanceCardLiMarginBtm: Schema.Attribute.String;
    HomeEnhanceCardLiMarginTop: Schema.Attribute.String;
    HomeEnhanceCardLiStyle: Schema.Attribute.String;
    HomeEnhanceCardMaxWidth: Schema.Attribute.String;
    HomeEnhanceCardMinHeight: Schema.Attribute.String;
    HomeEnhanceCardMinWidth: Schema.Attribute.String;
    HomeEnhanceCardPadding: Schema.Attribute.String;
    HomeEnhanceCardRadius: Schema.Attribute.String;
    HomeEnhanceCardTras: Schema.Attribute.String;
    HomeEnhanceHead: Schema.Attribute.String;
    HomeEnhanceHead2: Schema.Attribute.String;
    HomeEnhanceHead2MarginTop: Schema.Attribute.String;
    HomeEnhanceHeadColor: Schema.Attribute.String;
    HomeEnhanceHeadFontSize: Schema.Attribute.String;
    HomeEnhanceHeadFontWeight: Schema.Attribute.String;
    HomeEnhanceHeadMarginBtm: Schema.Attribute.String;
    HomeEnhanceHeadMarginTop: Schema.Attribute.String;
    HomeEnhanceHeadPadding: Schema.Attribute.String;
    HomeEnhanceHeadWidth: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-enhance.home-enhance'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeGetHomeGet extends Struct.CollectionTypeSchema {
  collectionName: 'home_gets';
  info: {
    description: '';
    displayName: 'HomeGet';
    pluralName: 'home-gets';
    singularName: 'home-get';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    HomeGetHead: Schema.Attribute.String;
    HomeGetHeadAudit: Schema.Attribute.String;
    HomeGetHeadAuditBgColor: Schema.Attribute.String;
    HomeGetHeadAuditBorder: Schema.Attribute.String;
    HomeGetHeadAuditBorderRadius: Schema.Attribute.String;
    HomeGetHeadAuditColor: Schema.Attribute.String;
    HomeGetHeadAuditCursor: Schema.Attribute.String;
    HomeGetHeadAuditFontSize: Schema.Attribute.String;
    HomeGetHeadAuditGapMob: Schema.Attribute.String;
    HomeGetHeadAuditOutline: Schema.Attribute.String;
    HomeGetHeadAuditPadding: Schema.Attribute.String;
    HomeGetHeadAuditRadius: Schema.Attribute.String;
    HomeGetHeadAuditShadow: Schema.Attribute.String;
    HomeGetHeadAuditTran: Schema.Attribute.String;
    HomeGetHeadAuditWeight: Schema.Attribute.String;
    HomeGetHeadAuditWidth: Schema.Attribute.String;
    HomeGetHeadAuditWidthMob: Schema.Attribute.String;
    HomeGetHeadBg: Schema.Attribute.String;
    HomeGetHeadBook: Schema.Attribute.String;
    HomeGetHeadBookBgColor: Schema.Attribute.String;
    HomeGetHeadBookBorder: Schema.Attribute.String;
    HomeGetHeadBookBorderRadius: Schema.Attribute.String;
    HomeGetHeadBookColor: Schema.Attribute.String;
    HomeGetHeadBookCursor: Schema.Attribute.String;
    HomeGetHeadBookFontSize: Schema.Attribute.String;
    HomeGetHeadBookGap: Schema.Attribute.String;
    HomeGetHeadBookGap1: Schema.Attribute.String;
    HomeGetHeadBookGapMob: Schema.Attribute.String;
    HomeGetHeadBookInGap: Schema.Attribute.String;
    HomeGetHeadBookPadding: Schema.Attribute.String;
    HomeGetHeadBookPaddingRight: Schema.Attribute.String;
    HomeGetHeadBookRadius: Schema.Attribute.String;
    HomeGetHeadBookSpanBgColor: Schema.Attribute.String;
    HomeGetHeadBookSpanBorderRadius: Schema.Attribute.String;
    HomeGetHeadBookSpanColor: Schema.Attribute.String;
    HomeGetHeadBookSpanFontSize: Schema.Attribute.String;
    HomeGetHeadBookSpanHeight: Schema.Attribute.String;
    HomeGetHeadBookSpanWidth: Schema.Attribute.String;
    HomeGetHeadBookWeight: Schema.Attribute.String;
    HomeGetHeadBookWidth: Schema.Attribute.String;
    HomeGetHeadColor: Schema.Attribute.String;
    HomeGetHeadFontSize: Schema.Attribute.String;
    HomeGetHeadMarginBtm: Schema.Attribute.String;
    HomeGetHeadMarginTop: Schema.Attribute.String;
    HomeGetHeadPadding: Schema.Attribute.String;
    HomeGetHeadWeight: Schema.Attribute.String;
    HomeGetHeadWidth: Schema.Attribute.String;
    HomeGetPadding: Schema.Attribute.String;
    HomeGetViewBtn: Schema.Attribute.String;
    HomeGetViewBtnBgColor: Schema.Attribute.String;
    HomeGetViewBtnBorder: Schema.Attribute.String;
    HomeGetViewBtnBorderRadius: Schema.Attribute.String;
    HomeGetViewBtnColor: Schema.Attribute.String;
    HomeGetViewBtnCursor: Schema.Attribute.String;
    HomeGetViewBtnFontSize: Schema.Attribute.String;
    HomeGetViewBtnMarBtm: Schema.Attribute.String;
    HomeGetViewBtnOutline: Schema.Attribute.String;
    HomeGetViewBtnPadding: Schema.Attribute.String;
    HomeGetViewBtnRadius: Schema.Attribute.String;
    HomeGetViewBtnShadow: Schema.Attribute.String;
    HomeGetViewBtnTran: Schema.Attribute.String;
    HomeGetViewBtnWeight: Schema.Attribute.String;
    HomeGetViewBtnWidth: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-get.home-get'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeScrollHomeScroll extends Struct.CollectionTypeSchema {
  collectionName: 'home_scrolls';
  info: {
    description: '';
    displayName: 'HomeScroll';
    pluralName: 'home-scrolls';
    singularName: 'home-scroll';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    HomeScrollBorderColor: Schema.Attribute.String;
    HomeScrollBorderColorHeight: Schema.Attribute.String;
    HomeScrollBorderColorWidth: Schema.Attribute.String;
    HomeScrollBorderHeight: Schema.Attribute.String;
    HomeScrollBorderMarginTop: Schema.Attribute.String;
    HomeScrollBorderTextGlow: Schema.Attribute.String;
    HomeScrollBrandMargin: Schema.Attribute.String;
    HomeScrollGap: Schema.Attribute.String;
    HomeScrollImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    HomeScrollImgFilter: Schema.Attribute.String;
    HomeScrollImgHeight: Schema.Attribute.String;
    HomeScrollImgObjectFit: Schema.Attribute.String;
    HomeScrollImgWidth: Schema.Attribute.String;
    HomeScrollMarginBottom: Schema.Attribute.String;
    HomeScrollMarqueeSpeed: Schema.Attribute.String;
    HomeScrollPadding: Schema.Attribute.String;
    HomeScrollStarColor: Schema.Attribute.String;
    HomeScrollStarFontSize: Schema.Attribute.String;
    HomeScrollStarFontSizeMob: Schema.Attribute.String;
    HomeScrollStarNo: Schema.Attribute.String;
    HomeScrollTitle: Schema.Attribute.String;
    HomeScrollTitleColor: Schema.Attribute.String;
    HomeScrollTitleFontSize: Schema.Attribute.String;
    HomeScrollTitleFontSizeMob: Schema.Attribute.String;
    HomeScrollTitleFontWeight: Schema.Attribute.String;
    HomeScrollTitleWidthMob: Schema.Attribute.String;
    HomeScrollWidth: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-scroll.home-scroll'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeShopifyHomeShopify extends Struct.CollectionTypeSchema {
  collectionName: 'home_shopifies';
  info: {
    description: '';
    displayName: 'HomeShopify';
    pluralName: 'home-shopifies';
    singularName: 'home-shopify';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    HomeShopifyBtnAudit: Schema.Attribute.String;
    HomeShopifyBtnAuditBgColor: Schema.Attribute.String;
    HomeShopifyBtnAuditBorderRadius: Schema.Attribute.String;
    HomeShopifyBtnAuditColor: Schema.Attribute.String;
    HomeShopifyBtnAuditCursor: Schema.Attribute.String;
    HomeShopifyBtnAuditFontSize: Schema.Attribute.String;
    HomeShopifyBtnAuditFontWeight: Schema.Attribute.String;
    HomeShopifyBtnAuditPadding: Schema.Attribute.String;
    HomeShopifyBtnDivGap: Schema.Attribute.String;
    HomeShopifyBtnDivMarginTop: Schema.Attribute.String;
    HomeShopifyBtnTalk: Schema.Attribute.String;
    HomeShopifyBtnTalkBgColor: Schema.Attribute.String;
    HomeShopifyBtnTalkBorder: Schema.Attribute.String;
    HomeShopifyBtnTalkBorderRadius: Schema.Attribute.String;
    HomeShopifyBtnTalkColor: Schema.Attribute.String;
    HomeShopifyBtnTalkGap: Schema.Attribute.String;
    HomeShopifyBtnTalkGapMob: Schema.Attribute.String;
    HomeShopifyBtnTalkGapMob1: Schema.Attribute.String;
    HomeShopifyBtnTalkPadding: Schema.Attribute.String;
    HomeShopifyBtnTalkPaddingRight: Schema.Attribute.String;
    HomeShopifyBtnTalkSpanBgColor: Schema.Attribute.String;
    HomeShopifyBtnTalkSpanBorderRadius: Schema.Attribute.String;
    HomeShopifyBtnTalkSpanColor: Schema.Attribute.String;
    HomeShopifyBtnTalkSpanFontSize: Schema.Attribute.String;
    HomeShopifyBtnTalkSpanHeight: Schema.Attribute.String;
    HomeShopifyBtnTalkSpanWidth: Schema.Attribute.String;
    HomeShopifyBtnTalkWidth: Schema.Attribute.String;
    HomeShopifyBtnTalkWidth1: Schema.Attribute.String;
    HomeShopifyBtnTalkWidthMob: Schema.Attribute.String;
    HomeShopifyFontSize: Schema.Attribute.String;
    HomeShopifyFontSizeMob: Schema.Attribute.String;
    HomeShopifyLeftMarginTop: Schema.Attribute.String;
    HomeShopifyLeftMaxWidth: Schema.Attribute.String;
    HomeShopifyLi1: Schema.Attribute.String;
    HomeShopifyLi2: Schema.Attribute.String;
    HomeShopifyLi3: Schema.Attribute.String;
    HomeShopifyLiFontSize: Schema.Attribute.String;
    HomeShopifyLiFontWeight: Schema.Attribute.String;
    HomeShopifyLiMarginBottom: Schema.Attribute.String;
    HomeShopifyMaxWidth: Schema.Attribute.String;
    HomeShopifyPaddingLeft: Schema.Attribute.String;
    HomeShopifyPaddingLeftMob: Schema.Attribute.String;
    HomeShopifyPtag: Schema.Attribute.String;
    HomeShopifyPtagColor: Schema.Attribute.String;
    HomeShopifyPtagFontSize: Schema.Attribute.String;
    HomeShopifyPtagFontWeight: Schema.Attribute.String;
    HomeShopifyPtagMarginTop: Schema.Attribute.String;
    HomeShopifyRightImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    HomeShopifyRightImgMob: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    HomeShopifytitle: Schema.Attribute.String;
    HomeShopifytitleColor: Schema.Attribute.String;
    HomeShopifytitleFontWeight: Schema.Attribute.String;
    HomeShopifytitleLineHeight: Schema.Attribute.String;
    HomeShopifyUiListStyle: Schema.Attribute.String;
    HomeShopifyUiMarginTop: Schema.Attribute.String;
    HomeShopifyUiPadding: Schema.Attribute.String;
    imageUrlBorderRadius: Schema.Attribute.String;
    imageUrlMaxWidth: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-shopify.home-shopify'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeSliderHomeSlider extends Struct.CollectionTypeSchema {
  collectionName: 'home_sliders';
  info: {
    description: '';
    displayName: 'HomeSlider';
    pluralName: 'home-sliders';
    singularName: 'home-slider';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    HomeSliderImgs: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    HomeSliderImgsInnerBorderRadius: Schema.Attribute.String;
    HomeSliderImgsInnerHeight: Schema.Attribute.String;
    HomeSliderImgsInnerMarLeft: Schema.Attribute.String;
    HomeSliderImgsInnerShadow: Schema.Attribute.String;
    HomeSliderImgsInnerWidth: Schema.Attribute.String;
    HomeSliderImgsPadding: Schema.Attribute.String;
    HomeSliderImgsPadding1: Schema.Attribute.String;
    HomeSliderImgsTrans: Schema.Attribute.String;
    HomeSliderImgsWidth: Schema.Attribute.String;
    HomeSliderImgsWidthMob: Schema.Attribute.String;
    HomeSliderMaxWidth: Schema.Attribute.String;
    HomeSliderNextBtn: Schema.Attribute.String;
    HomeSliderNextBtnBgColor: Schema.Attribute.String;
    HomeSliderNextBtnColor: Schema.Attribute.String;
    HomeSliderPrevBgColor: Schema.Attribute.String;
    HomeSliderPrevBorderRadius: Schema.Attribute.String;
    HomeSliderPrevBtm: Schema.Attribute.String;
    HomeSliderPrevBtmMob: Schema.Attribute.String;
    HomeSliderPrevBtn: Schema.Attribute.String;
    HomeSliderPrevBtnBgColor: Schema.Attribute.String;
    HomeSliderPrevBtnColor: Schema.Attribute.String;
    HomeSliderPrevColor: Schema.Attribute.String;
    HomeSliderPrevCursor: Schema.Attribute.String;
    HomeSliderPrevFontSize: Schema.Attribute.String;
    HomeSliderPrevHeight: Schema.Attribute.String;
    HomeSliderPrevLeft: Schema.Attribute.String;
    HomeSliderPrevLeftMob: Schema.Attribute.String;
    HomeSliderPrevShadow: Schema.Attribute.String;
    HomeSliderPrevTransform: Schema.Attribute.String;
    HomeSliderPrevWidth: Schema.Attribute.String;
    HomeSliderPrevZindex: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-slider.home-slider'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeStunHomeStun extends Struct.CollectionTypeSchema {
  collectionName: 'home_stuns';
  info: {
    description: '';
    displayName: 'HomeStun';
    pluralName: 'home-stuns';
    singularName: 'home-stun';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    HomeStunHead: Schema.Attribute.Text;
    HomeStunHeadColor: Schema.Attribute.String;
    HomeStunHeadFontSize: Schema.Attribute.String;
    HomeStunHeadFontSizeMob: Schema.Attribute.String;
    HomeStunHeadFontWeight: Schema.Attribute.String;
    HomeStunHeadMarginBottom: Schema.Attribute.String;
    HomeStunMargin: Schema.Attribute.String;
    HomeStunMaxWidth: Schema.Attribute.String;
    HomeStunPadding: Schema.Attribute.String;
    HomeStunPara: Schema.Attribute.Text;
    HomeStunParaColor: Schema.Attribute.String;
    HomeStunParaFontSize: Schema.Attribute.String;
    HomeStunParaLineH: Schema.Attribute.String;
    HomeStunParaMarginTop: Schema.Attribute.String;
    HomeStunParaWidth: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-stun.home-stun'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNavbarNavbar extends Struct.CollectionTypeSchema {
  collectionName: 'navbars';
  info: {
    description: '';
    displayName: 'Navbar';
    pluralName: 'navbars';
    singularName: 'navbar';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hamburgerBgColor: Schema.Attribute.String;
    hamburgerGap: Schema.Attribute.String;
    hamburgerHeight: Schema.Attribute.String;
    hamburgerTrans: Schema.Attribute.String;
    hamburgerWidth: Schema.Attribute.String;
    isMenuOpenBg: Schema.Attribute.String;
    isMenuOpenLeft: Schema.Attribute.String;
    isMenuOpenLineH: Schema.Attribute.String;
    isMenuOpenPadding: Schema.Attribute.String;
    isMenuOpenPosition: Schema.Attribute.String;
    isMenuOpenShadow: Schema.Attribute.String;
    isMenuOpenTextAlign: Schema.Attribute.String;
    isMenuOpenTran: Schema.Attribute.String;
    isMenuOpenWidth: Schema.Attribute.String;
    isMenuOpenZindex: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::navbar.navbar'
    > &
      Schema.Attribute.Private;
    logoColor: Schema.Attribute.String;
    logoFontsize: Schema.Attribute.String;
    logofontWeight: Schema.Attribute.String;
    logoLetterSpacing: Schema.Attribute.String;
    logoText: Schema.Attribute.String;
    MidNavbar1: Schema.Attribute.String;
    MidNavbar2: Schema.Attribute.String;
    MidNavbar3: Schema.Attribute.String;
    MidNavbarBorder: Schema.Attribute.String;
    MidNavbarBorderRadius: Schema.Attribute.String;
    MidNavbarColor: Schema.Attribute.String;
    MidNavbarGap: Schema.Attribute.String;
    MidNavbarInnerPadding: Schema.Attribute.String;
    MidNavbarPadding: Schema.Attribute.String;
    MidNavbarTransition: Schema.Attribute.String;
    NavbackgroundColor: Schema.Attribute.String;
    NavbuttonbgColor: Schema.Attribute.String;
    NavbuttonBorderRadius: Schema.Attribute.String;
    NavbuttonColor: Schema.Attribute.String;
    NavbuttonFontsize: Schema.Attribute.String;
    NavbuttonGap: Schema.Attribute.String;
    Navbuttonheight: Schema.Attribute.String;
    NavbuttonLink: Schema.Attribute.String;
    NavbuttonPadding: Schema.Attribute.String;
    NavbuttonText: Schema.Attribute.String;
    NavbuttonTextbgColor: Schema.Attribute.String;
    NavbuttonTextBgColor: Schema.Attribute.String;
    NavbuttonTextBorder: Schema.Attribute.String;
    NavbuttonTextBorderRad: Schema.Attribute.String;
    NavbuttonTextBorderRadius: Schema.Attribute.String;
    NavbuttonTextColor: Schema.Attribute.String;
    NavbuttonTextColor1: Schema.Attribute.String;
    NavbuttonTextCursor: Schema.Attribute.String;
    NavbuttonTextFontSize: Schema.Attribute.String;
    NavbuttonTextFontSize1: Schema.Attribute.String;
    NavbuttonTextGap: Schema.Attribute.String;
    NavbuttonTextHeight: Schema.Attribute.String;
    NavbuttonTextPadding: Schema.Attribute.String;
    NavbuttonTextPaddingLeft: Schema.Attribute.String;
    NavbuttonTextSpanBgColor: Schema.Attribute.String;
    NavbuttonTextSpanBorderRad: Schema.Attribute.String;
    NavbuttonTextSpanColor: Schema.Attribute.String;
    NavbuttonTextSpanFontSize: Schema.Attribute.String;
    NavbuttonTextSpanHeight: Schema.Attribute.String;
    NavbuttonTextSpanWidth: Schema.Attribute.String;
    NavbuttonTextWeight: Schema.Attribute.String;
    NavbuttonTextWidth: Schema.Attribute.String;
    Navbuttonwidth: Schema.Attribute.String;
    NavfontFamily: Schema.Attribute.String;
    NavHeight: Schema.Attribute.String;
    NavPadding: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    setIsMenuOpenColor: Schema.Attribute.String;
    setIsMenuOpenFontSize: Schema.Attribute.String;
    setIsMenuOpenMargin: Schema.Attribute.String;
    toggleMenuBg: Schema.Attribute.String;
    toggleMenuBorder: Schema.Attribute.String;
    toggleMenuCursor: Schema.Attribute.String;
    toggleMenuPadding: Schema.Attribute.String;
    toggleMenuZindex: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::case-card.case-card': ApiCaseCardCaseCard;
      'api::case-footer.case-footer': ApiCaseFooterCaseFooter;
      'api::case-study.case-study': ApiCaseStudyCaseStudy;
      'api::home-enhance.home-enhance': ApiHomeEnhanceHomeEnhance;
      'api::home-get.home-get': ApiHomeGetHomeGet;
      'api::home-scroll.home-scroll': ApiHomeScrollHomeScroll;
      'api::home-shopify.home-shopify': ApiHomeShopifyHomeShopify;
      'api::home-slider.home-slider': ApiHomeSliderHomeSlider;
      'api::home-stun.home-stun': ApiHomeStunHomeStun;
      'api::navbar.navbar': ApiNavbarNavbar;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
