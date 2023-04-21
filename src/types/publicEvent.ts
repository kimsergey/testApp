export enum PublicEventType {
CommitCommentEvent = 'CommitCommentEvent',
CreateEvent = 'CreateEvent',
DeleteEvent = 'DeleteEvent',
ForkEvent = 'ForkEvent',
GollumEvent = 'GollumEvent',
IssueCommentEvent = 'IssueCommentEvent',
IssuesEvent = 'IssuesEvent',
MemberEvent = 'MemberEvent',
PublicEvent = 'PublicEvent',
PullRequestEvent = 'PullRequestEvent',
PullRequestReviewEvent = 'PullRequestReviewEvent',
PullRequestReviewCommentEvent = 'PullRequestReviewCommentEvent',
PullRequestReviewThreadEvent = 'PullRequestReviewThreadEvent',
PushEvent = 'PushEvent',
ReleaseEvent = 'ReleaseEvent',
SponsorshipEvent = 'SponsorshipEvent',
WatchEvent = 'WatchEvent',
}

type ActorType = {
  avatar_url: string,
  display_login: string,
  gravatar_id: string,
  id: number,
  login: string,
  url: string,
}

type RepoType = {
  id: string,
  name: string,
  url: string,
}

export type PublicEvent = {
  actor: ActorType,
  created_at: string,
  id: string,
  payload: unknown,
  public: boolean,
  repo: RepoType,
  type: PublicEventType,
}
