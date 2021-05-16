// 暂时也不会用来做 issue 关联。
// ref: https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-angular/writer-opts.js
// ref: https://github.com/ITxiaohao/conventional-changelog-custom-config
const compareFunc = require('compare-func');

module.exports = {
  writerOpts: {
    transform: (commit, context) => {
      let discard = true;
      const issues = [];
      commit.notes.forEach((note) => {
        note.title = 'BREAKING CHANGES';
        discard = false;
      });

      if (commit.type === 'feat' || commit.type === 'added' || commit.type === 'ADDED') {
        commit.type = '✨ Features | 新功能';
      } else if (commit.type === 'fix' || commit.type === 'fixed') {
        commit.type = '🐛 Bug Fixes | Bug 修复';
      } else if (commit.type === 'perf') {
        commit.type = '⚡ Performance | 性能优化';
      } else if (commit.type === 'revert' || commit.revert) {
        commit.type = '⏪ Reverts | 回退';
      } else if (commit.type === 'docs') {
        commit.type = '📝 Documentation | 文档';
      } else if (commit.type === 'refactor') {
        commit.type = '♻ Code Refactor | 代码重构';
      } else if (commit.type === 'test') {
        commit.type = '✅ Tests | 测试';
      } else if (commit.type === 'build') {
        commit.type = '👷‍ Build System | 构建优化';
      } else if (commit.type === 'ci') {
        commit.type = '🔧 CI configuration | CI 配置';
      } else if (commit.type === 'chore') {
        commit.type = '🎫 Chore | 其他更新';
      } else if (commit.type === 'ADDED') {
        commit.type = '✨ Features | 新功能';
      } else if (discard) {
        // 忽略 notes 吧
        return;
      }

      if (commit.scope === '*') {
        commit.scope = '';
      }

      if (typeof commit.hash === 'string') {
        commit.shortHash = commit.hash.substring(0, 7);
        commit.hash = commit.hash.substring(0, 7);
      }

      // remove references that already appear in the subject
      commit.references = commit.references.filter((reference) => {
        if (issues.indexOf(reference.issue) === -1) {
          return true;
        }

        return false;
      });
      return commit;
    },
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    noteGroupsSort: 'title',
    notesSort: compareFunc
  }
};
