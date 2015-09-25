module.exports = {
  // アローの両端に空白強制
  'arrow_spacing': {
    'level': 'error'
  },
  // 中括弧内の空白スタイル
  'braces_spacing': {
    'level': 'error',
    'spaces': 0,
    'empty_object_spaces': 0
  },
  // クラス名をUpperCamelCaseに強制
  'camel_case_classes': {
    'level': 'error'
  },
  'coffeescript_error': {
    'level': 'error'
  },
  // コロンまわりの空白スタイル
  'colon_assignment_spacing': {
    'level': 'error',
    'spacing': {
      'left': 0,
      'right': 1
    }
  },
  // 複雑度
  'cyclomatic_complexity': {
    'value': 8,
    'level': 'warn'
  },
  // オブジェクトリテラルとクラスでのキー重複
  'duplicate_key': {
    'level': 'error'
  },
  // new 時に引数なしの場合は引数を強制
  'empty_constructor_needs_parens': {
    'level': 'error'
  },
  // 内包表記まわりに括弧を強制
  'ensure_comprehensions': {
    'level': 'error'
  },
  // ファイル末尾の改行強制
  'eol_last': {
    'level': 'error'
  },
  // インデントスタイル
  'indentation': {
    'value': 2,
    'level': 'error'
  },
  // 改行スタイル
  'line_endings': {
    'level': 'error',
    'value': 'unix'
  },
  // 1行の最大文字数
  'max_line_length': {
    'value': 120,
    'level': 'error',
    'limitComments': true
  },
  // fat arrow 忘れ撲滅
  'missing_fat_arrows': {
    'level': 'error',
    'is_strict': false
  },
  // クラス定義後の空行数
  'newlines_after_classes': {
    'value': 2,
    'level': 'error'
  },
  // バッククォート禁止
  'no_backticks': {
    'level': 'error'
  },
  // debugger / console 禁止
  'no_debugger': {
    'level': 'warn',
    'console': true
  },
  // 空の関数定義禁止
  'no_empty_functions': {
    'level': 'error'
  },
  // 引数が空の場合の括弧禁止
  'no_empty_param_list': {
    'level': 'error'
  },
  // 暗黙の中括弧(オブジェクトの中括弧省略)を禁止
  'no_implicit_braces': {
    'level': 'ignore',
    'strict': true
  },
  // 関数実行時の暗黙の括弧を禁止
  'no_implicit_parens': {
    'strict': true,
    'level': 'ignore'
  },
  // 埋め込み文字列のシングルクオート禁止
  'no_interpolation_in_single_quotes': {
    'level': 'error'
  },
  // ネストした埋め込み文字列禁止
  'no_nested_string_interpolation': {
    'level': 'error'
  },
  // ++ 禁止
  'no_plusplus': {
    'level': 'error'
  },
  // メソッド内関数での fat arrow 禁止
  'no_private_function_fat_arrows': {
    'level': 'error'
  },
  // @ 自体の評価禁止
  'no_stand_alone_at': {
    'level': 'error'
  },
  // タブインデント禁止
  'no_tabs': {
    'level': 'error'
  },
  // this 禁止
  'no_this': {
    'level': 'error'
  },
  // 文字列エラーの throw 禁止
  'no_throwing_strings': {
    'level': 'error'
  },
  // セミコロン禁止
  'no_trailing_semicolons': {
    'level': 'error'
  },
  // 行末空白禁止
  'no_trailing_whitespace': {
    'level': 'error',
    'allowed_in_comments': false,
    'allowed_in_empty_lines': false
  },
  // 不要なダブルクオート禁止
  'no_unnecessary_double_quotes': {
    'level': 'error'
  },
  // 不要な fat arrow 禁止
  'no_unnecessary_fat_arrows': {
    'level': 'error'
  },
  // 括弧なしの new を禁止
  'non_empty_constructor_needs_parens': {
    'level': 'ignore'
  },
  // &&, || 系ではなく and, or 等の使用を強制
  'prefer_english_operator': {
    'level': 'error',
    'doubleNotLevel': 'ignore'
  },
  // 演算子まわりの空白強制
  'space_operators': {
    'level': 'error'
  },
  // コンマ後の空白強制
  'spacing_after_comma': {
    'level': 'error'
  },
  'transform_messes_up_line_numbers': {
    'level': 'warn'
  }
};
